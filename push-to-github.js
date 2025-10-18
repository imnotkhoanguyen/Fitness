import { Octokit } from '@octokit/rest'

let connectionSettings;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

async function createGitHubRepo() {
  try {
    const octokit = await getUncachableGitHubClient();
    
    const { data: user } = await octokit.users.getAuthenticated();
    console.log(`Authenticated as: ${user.login}`);

    const repoName = 'energy-factory-longkhanh';
    
    try {
      const { data: repo } = await octokit.repos.createForAuthenticatedUser({
        name: repoName,
        description: 'Professional bilingual Astro website for healthy lifestyle coaching in Long Khanh City, Vietnam',
        private: false,
        auto_init: false
      });
      
      console.log(`✅ Created repository: ${repo.html_url}`);
      return repo.clone_url;
    } catch (error) {
      if (error.status === 422) {
        console.log(`Repository '${repoName}' already exists. Getting repository info...`);
        const { data: repo } = await octokit.repos.get({
          owner: user.login,
          repo: repoName
        });
        console.log(`✅ Using existing repository: ${repo.html_url}`);
        return repo.clone_url;
      }
      throw error;
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

createGitHubRepo().then(cloneUrl => {
  console.log('\n📦 Repository URL:', cloneUrl);
  console.log('\n✅ GitHub repository is ready!');
  process.exit(0);
}).catch(error => {
  console.error('Failed to create repository:', error);
  process.exit(1);
});

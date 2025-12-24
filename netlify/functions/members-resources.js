exports.handler = async (event, context) => {
  const user = context && context.clientContext && context.clientContext.user;

  if (!user) {
    return {
      statusCode: 401,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store'
      },
      body: JSON.stringify({
        error: 'Unauthorized. Please sign in to access members-only resources.'
      })
    };
  }

  // Replace these with your real members-only resources (Drive folders, recordings, templates, etc.)
  const resources = [
    {
      title: 'Members handbook (placeholder)',
      url: 'https://aihackathon.pro/',
      note: 'Replace with a real link (e.g., Google Drive folder with restricted access).'
    },
    {
      title: 'Submission templates (placeholder)',
      url: 'https://aihackathon.pro/members.html',
      note: 'Add links to the 2-page write-up and 10-slide deck templates here.'
    },
    {
      title: 'Session recordings & slides (placeholder)',
      url: 'https://aihackathon.pro/members.html',
      note: 'Add Drive/YouTube unlisted links shared within the community.'
    },
    {
      title: 'Past submissions (2025) — reference spreadsheet',
      url: 'https://docs.google.com/spreadsheets/d/1reC3JTJfoq5IHD0N60uOTidVDLprC9lSDbRjGo_i3jo',
      note: 'Members-only reference link.'
    },
    {
      title: 'Past submissions (2024) — reference document',
      url: 'https://docs.google.com/document/d/15N1HCwghvmifW0rmJCiF28-HQKxT4vu5zwTHwYM4m48',
      note: 'Members-only reference link.'
    },
    {
      title: 'Curated learning paths (placeholder)',
      url: 'https://aihackathon.pro/members.html',
      note: 'Add curated tracks (e.g., Getting started, BIM automation, Agentic AI for practice management).'
    },
    {
      title: 'Past sharing & recordings (placeholder)',
      url: 'https://www.youtube.com/@SIAYAL',
      note: 'If you need this truly private, host behind a private link or Drive permission.'
    }
  ];

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    },
    body: JSON.stringify({
      member: {
        email: user.email || null
      },
      resources
    })
  };
};

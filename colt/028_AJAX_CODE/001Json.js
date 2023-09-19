dataObject = {
  login: "siva1b3",
  id: 42565813,
  node_id: "MDQ6VXNlcjQyNTY1ODEz",
  avatar_url: "https://avatars.githubusercontent.com/u/42565813?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/siva1b3",
  html_url: "https://github.com/siva1b3",
  followers_url: "https://api.github.com/users/siva1b3/followers",
  following_url: "https://api.github.com/users/siva1b3/following{/other_user}",
  gists_url: "https://api.github.com/users/siva1b3/gists{/gist_id}",
  starred_url: "https://api.github.com/users/siva1b3/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/siva1b3/subscriptions",
  organizations_url: "https://api.github.com/users/siva1b3/orgs",
  repos_url: "https://api.github.com/users/siva1b3/repos",
  events_url: "https://api.github.com/users/siva1b3/events{/privacy}",
  received_events_url: "https://api.github.com/users/siva1b3/received_events",
  type: "User",
  site_admin: false,
  name: "SivaDev",
  company: null,
  blog: "",
  location: "Bangalore ",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 19,
  public_gists: 0,
  followers: 5,
  following: 34,
  created_at: "2018-08-21T05:55:51Z",
  updated_at: "2023-08-24T13:24:00Z",
};

const dataObjectToString = JSON.stringify(dataObject);

console.log(dataObjectToString);

const StringToJson = JSON.parse(dataObjectToString);

console.table(StringToJson);
console.log(StringToJson);

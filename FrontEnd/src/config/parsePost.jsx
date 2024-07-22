export default function parsePostData(responseData) {
  const posts = []; // Object to store parsed posts

  // Split data by platform sections
  const platformSections = responseData.split('\n\nPlatform: ');

  for (const section of platformSections) {
    if (section.trim()) {
      // Check if section is not empty
      const lines = section.split('\n\n');
      if (lines.length === 2) {
        const platform = lines[0].trim(); // Remove leading/trailing whitespace
        const postBody = lines[1].trim(); // Remove leading/trailing whitespace

        posts[platform] = postBody; // Store platform and body in object
      }
    }
    console.log(posts);
  }

  // Initialize empty arrays for missing platforms

  return [posts];
}

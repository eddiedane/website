export function fromBase64Url(base64Url: string) {
  const base64String = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Replace for standard Base64
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4); // Add padding if necessary
  const standardBase64 = base64String + padding; // Ensure correct Base64 length
  const binaryString = atob(standardBase64); // Decode from Base64
  const utf8Bytes = new Uint8Array([...binaryString].map((char) => char.charCodeAt(0))); // Convert to bytes

  return new TextDecoder().decode(utf8Bytes); // Decode back to string
}

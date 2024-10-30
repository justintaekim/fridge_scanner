import AWS from "aws-sdk";

// Configure AWS Rekognition with credentials and region from environment variables
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const rekognition = new AWS.Rekognition();

export async function POST(req) {
  // Get the base64 image data from the request body
  const { imageUrl } = await req.json();

  // Decode the base64 image data
  const buffer = Buffer.from(imageUrl, "base64");

  // Configure params for AWS Rekognition
  const params = {
    Image: {
      Bytes: buffer,
    },
    MaxLabels: 20, // Max number of labels to return
    MinConfidence: 90, // Minimum confidence level
  };

  try {
    // Call AWS Rekognition to detect labels in the image
    const response = await rekognition.detectLabels(params).promise();
    return new Response(JSON.stringify({ data: response.Labels }), {
      status: 200,
    });
  } catch (error) {
    // Error catching
    console.error("Error with AWS Rekognition:", error);
    return new Response(JSON.stringify({ error: "AWS Rekognition error" }), {
      status: 500,
    });
  }
}

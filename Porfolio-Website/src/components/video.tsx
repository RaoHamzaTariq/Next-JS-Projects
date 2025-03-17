import React from "react";

const DemoVideo = ({ videoRef }: { videoRef: string }) => {
  // Extract asset ID from reference
  const assetId = videoRef.split("-").slice(1).join("-");
  const projectId = "yourProjectId"; // Replace with your Sanity project ID
  const dataset = "production"; // Replace with your dataset name

  // Construct the full URL
  const videoUrl = `https://cdn.sanity.io/files/${projectId}/${dataset}/${assetId}`;

  return (
    <video controls width="600">
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default DemoVideo;

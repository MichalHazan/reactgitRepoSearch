import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Repository({ repository }) {
  return (
    <Card sx={{ width: 250, height: 200, overflow: "auto", margin: 2 }}>
      <Avatar alt={repository.name} src={repository.owner.avatar_url} />
      <Typography variant="body2" color="text.secondary">
        {repository.owner.login}
      </Typography>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <a href={repository.html_url}>{repository.name}</a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {repository.description}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          created at: {repository.created_at}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          language: {repository.language}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          issues: {repository.open_issues_count}
        </Typography>
      </CardContent>
    </Card>
  );
}

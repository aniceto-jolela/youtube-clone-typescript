import { Avatar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import dayjs from "dayjs";
import { relative } from "node:path/posix";

//dayjs.extend(relative);

const useStyles = makeStyles(() => ({
  caption: {
    fontWeight: 500,
    display: "-weblit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
}));

function VideoCard({ item }: any) {
  const classes = useStyles();
  return (
    <Box>
      <img alt={item.title} src={item.thumb} />
      <Box display="flex" mt="1">
        <Box>
          <Avatar alt={item.authorName} src={item.authorAvatar}>
            sds
          </Avatar>
        </Box>
        <Box>
          <Typography
            className={classes.caption}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {item.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {item.authorName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${item.views} = ${dayjs(item.updatedAt).daysInMonth()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoCard;

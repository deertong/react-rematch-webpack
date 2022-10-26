import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
} from "@mui/material";
import { ListAltOutlined } from "@mui/icons-material";
import { connect } from "react-redux";
import moment from "moment";
import "./style.less";

const dateFormat = "YYYY-MM-DD HH:mm:ss";
function index(props) {
  const { todoList } = props;
  return (
    <div className="list-content width90">
      {todoList.length > 0 && (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {todoList.map((item) => {
            const date = moment(item.date).format(dateFormat);
            const isDone = item.done ? "完成" : "未完成";
            const secondary = (
              <span
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>创建时间：{date}</span>
                <span>是否完成：{isDone}</span>
              </span>
            );
            return (
              <ListItem key={item.date}>
                <ListItemAvatar>
                  <Avatar>
                    <ListAltOutlined />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={secondary} />
              </ListItem>
            );
          })}
        </List>
      )}
      {todoList.length === 0 && <div className="no-data">暂无数据</div>}
    </div>
  );
}
const mapStateToProps = (state) => ({
  todoList: state.todo.todoList,
});

const mapDispatchToProps = (dispatch) => ({
  update: dispatch.todo.update,
});
export default connect(mapStateToProps, mapDispatchToProps)(index);

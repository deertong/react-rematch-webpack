import React, { useState, useRef } from "react";
import { Button, TextField, Checkbox } from "@mui/material";
import { connect } from "react-redux";
import moment from "moment";
import "./style.less";

function index(props) {
  const todoList = props.todoList;

  const [value, setValue] = useState("");

  const inputRef = useRef(null);
  
 

  const textChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const onSubmit = () => {
    const datas = [...todoList];
    datas.push({ name: value, date: moment().valueOf() });
    props.update(datas);
    setValue("");
    inputRef.current.focus();
  };

  const onCheckChange = (e, data) => {
    const checked = e.target.checked;
    const payload = todoList.map((item) => {
      if (item.date === data.date) {
        item.done = checked;
      }
      return item;
    });
    props.update(payload);
  };

  const onDelete = (data) => {
    const payload = todoList.filter((item) => item.date !== data.date);
    props.update(payload);
  };

  return (
    <div className="home-content">
      <div className="text-in">
        <TextField
          fullWidth
          label="待办事项"
          variant="outlined"
          value={value}
          inputRef={inputRef}
          onChange={textChange}
        />
      </div>
      <div className="button-box">
      <Button className="button" disabled={value === ''} variant="outlined" onClick={onSubmit}>
        创建
      </Button>
      </div>

      <div className="list">
        {todoList.map((item) => {
          return (
            <div key={item.date} className="column-box">
              <div>
                <Checkbox checked={item.done} onChange={(e) => onCheckChange(e, item)} />
                <span
                  style={
                    item.done
                      ? { textDecoration: "line-through", color: "#999" }
                      : {}
                  }
                >
                  {item.name}
                </span>
              </div>
              <Button onClick={() => onDelete(item)}>删除</Button>
            </div>
          );
        })}
      </div>
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

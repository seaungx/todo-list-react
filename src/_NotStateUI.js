const NotStateUI = (props) => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px'}}>
      <div>
        <Input
          value={props.inputValue} placehodler='input info.'
          style={{ width: '300px'}}
          onChange={props.handlerInputChange}/>
        <Button type="primary" onClick={props.handlerBtnClick}>Submit</Button>
      </div>
      <List
        bordered
        style={{ marginTop: '10px', width: '300px'}}
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => {props.handlerItemDelete(index)}}>{item}</List.Item>)}
        />
    </div>
  )
}

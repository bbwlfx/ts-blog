import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

interface Props {

}
interface States {

}

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

export default class Studio extends Component<Props, States> {
  render() {
    return (
      <div className="studio-container">
        <Menu
          mode="inline"
          defaultSelectedKeys={['all']}
        >
          <Item key="new_note"><Icon type="plus-circle" />新笔记</Item>
          <Item key="all_notes"><Icon type="file" />所有笔记</Item>
          <SubMenu
            title={<span><Icon type="book" />笔记本</span>}
            key="notebooks"
          >
            <Item key="new_notebook"><Icon type="plus-circle-o" />新建笔记本</Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
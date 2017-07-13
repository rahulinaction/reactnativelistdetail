import React,{Component} from 'react';
import {ListView, ScrollView, Text,View, TouchableHighlight} from 'react-native';
import Item from '../components/Item';
import {connect} from 'react-redux';

class List extends Component {
  constructor(props){
    super(props);
    //Initializing a listview datasource
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //We dont have a button hence we fetch items overhere //Refactor
//    console.log("the props i s",this.props);
    this.props.fetchItems();
  }

  render() {
  //  console.log("the item array is ",Object.values(this.props.fetchedItems));
  // Need to refactor
  const items = Object.values(this.props.fetchedItems);
  console.log("the items is",items);
  return (
      <ListView
        enableEmptySections={true}
        dataSource = {this.ds.cloneWithRows(items)}
        renderRow={(rowData) => <Item {...rowData} /> }
        />
    );
  }
}

function mapStateToProps(state) {
  return {
    fetchedItems: state.fetchedItems
  }
}

export default connect(mapStateToProps) (List);

import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  InputAccessoryView,
  Text,
  View,
} from 'react-native';
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from 'recyclerlistview';
import { Fakeserver } from './Fakeserver'

export class RecyclerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProvider: new DataProvider((r1, r2) => {
        return r1 !== r2;
      }),
      someThingHappen: false,
      fakeData: [],
      loadingMore: false,
    };
  }

  layoutProvider = new LayoutProvider(
    index => {
      if (this.state.dataProvider.getDataForIndex(index).type) {
        return this.state.dataProvider.getDataForIndex(index).type;
      } else {
        return 'dufault';
      }

     // return index;
    },
    (type, dim) => {
      // console.log(type);
    //   dim.width = Dimensions.get('window').width / 2;
    //   dim.height = 50;
      switch (type) {
        case 'fake-data':
          dim.width = Dimensions.get('window').width;
          dim.height = 50;
          break;
        default:
          dim.width = Dimensions.get('window').width / 2;
          dim.height = 50;
      }
    }
  );

  fetchData = async qty => {
    this.setState({ ...this.state, loadingMore: true });
    const data = await Fakeserver(qty);
    if (data === 'done')
      return this.setState({ ...this.state, loadingMore: false });
    this.setState({
    // ...this.state,
      dataProvider: this.state.dataProvider.cloneWithRows([
        ...this.state.fakeData,
        ...data,
      ]),
      fakeData: [...this.state.fakeData, ...data],
      loadingMore: false,
    });
  };

  componentDidMount() {
    this.fetchData(20);
  }

  rowRenderer = (type, data, index, extendedState) => {
    switch (type) {
      case 'fake-data':
        return (
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              padding: 5,
              borderBottomColor: 'red',
              borderBottomWidth: 1,
              backgroundColor: 'red',
            }}
          >
            {data.item}
          </Text>
        );

      case 'non-fake-data':
        return (
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                padding: 5,
                borderBottomColor: 'red',
                borderBottomWidth: 1,
                backgroundColor: 'yellow',
              }}
            >
              {data.item}
            </Text>
            {extendedState.someThingHappen ? <Text>Yes Happen</Text> : null}
          </View>
        );

      default:
        return null;
    }
  };

  fetchMore = async () => {
    console.log('calling fetchMore');
    await this.fetchData(20);
  };

  render() {
    if (!this.state.dataProvider._data.length) return null;
    return (
      <>
        <RecyclerListView
          dataProvider={this.state.dataProvider}
          layoutProvider={this.layoutProvider}
          rowRenderer={this.rowRenderer}
          extendedState={{ someThingHappen: this.state.someThingHappen }}
          onEndReached={this.fetchMore}
          onEndReachedThreshold={0.5}
          renderFooter={() =>
            this.state.loadingMore && (
              <Text
                style={{ padding: 10, fontWeight: 'bold', textAlign: 'center' }}
              >
                Loading
              </Text>
            )
          }
        />
        {/* <Button
          title='click me'
          onPress={() =>
            this.setState({
              ...this.state,
              someThingHappen: !this.state.someThingHappen,
            })
          }
        /> */}
      </>
    );
  }
}

export default RecyclerPage;

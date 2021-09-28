import React, { useEffect, useState } from "react";
import {Text,View,StyleSheet} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { FakeServer } from "./FakeServer";


let stopMoreFetch = true;


const  LoadMoreComponnent = ()=>(
    <Text style={{fontSize:16,fontWeight:"bold",textAlign:"center",padding:5}}>
        Loading...
    </Text>
)
const PaginationPage = () =>{
    // console.warn(props)
    const [data,setData] = useState([]);
    const [loadingMore,setMoreLoading] = useState(false);

    const fetchData = async()=>{
        const response = await FakeServer(20);
        setData([...response]);
    }

    const fetchMoreData = async()=>{
        if(!stopMoreFetch){
            setMoreLoading(true);
            const response = await FakeServer(20);
            if(response=='done'){
                setMoreLoading(false);
                return;
            }
           
           setData([...data,...response]);
            stopMoreFetch =false;
        }
        setMoreLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[]);
    return(
        <FlatList
           data = {data}
           keyExtractor={item=>item}
           renderItem = {({item})=>
                <Text style={MyFlatListItemStyle.ItemStyle}>{item}</Text>
             } 
           onEndReached={fetchMoreData}  
           onEndReachedThreshold={0.5}
           onScrollBeginDrag={()=>{
               stopMoreFetch = false;
           }}
           ListFooterComponent={()=>setMoreLoading && <LoadMoreComponnent/>}
            //numColumns = {3}    // to convert FlatList to GridView
         >
        </FlatList>
    )
}
const MyFlatListItemStyle = StyleSheet.create({
    ItemStyle:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:20,
        padding:15,
        borderBottomColor:'red',
        borderBottomWidth:2,
    }
})
export default PaginationPage;
import React, {Component}  from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Nodes extends Component {
    render ()   {
        var {nodes} = this.props;
        return (
            <View>{
                nodes.map(({value, timestamp, nodeId}) =>
                    <View key={nodeId}>
                        <Text style={styles.bold}>{nodeId}</Text>
                        <Text>{value}</Text>
                        <Text>{timestamp}</Text>
                    </View>
                )
            }
            </View>
    )
    }
}

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },

});

AppRegistry.registerComponent('Nodes', () => Nodes);

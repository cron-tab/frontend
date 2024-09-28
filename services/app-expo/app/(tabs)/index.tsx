import {Platform, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default function HomeScreen() {
    const uri = Platform.OS === 'ios' ? 'http://localhost:3000/' : 'http://10.0.2.2:3000/';

    return (
        <WebView
            source={{uri}}
            style={styles.webview}
        />
    );
}

const styles = StyleSheet.create({
    webview: {
        flex: 1,
    },
});

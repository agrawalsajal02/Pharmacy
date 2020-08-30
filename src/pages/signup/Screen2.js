import React from "react";
import { Text, View, TouchableOpacity ,Button} from "react-native";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from 'expo-media-library';
import { Camera ,ImagePicker} from "expo-camera";

export default class Screen2 extends React.Component {
constructor(props){
  super(props);
}
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  
  takePicture = async function () {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      //alert(photo);
      console.log(photo)
      
      const {status}=await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if(status==='granted'){
      const assert=await MediaLibrary.createAssetAsync(photo.uri);
      const asset = await MediaLibrary.createAssetAsync(uri);
      this.camera.stopRecording();
      }else{
        console.log("Your camera permission do not allow this , plz give permission")
      }
          }
  };
  render() {



    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
      <View style={{ flex: 1 }}>
          <Camera
            ref={(ref) => {
              this.camera = ref;
            }}
            style={{ flex: 1 }}
            type={this.state.type}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: "flex-end",
                  alignItems: "center",
                }}
                
                onPress={() => this.takePicture()}
              >
                <Text
                  style={{ fontSize: 18, marginLeft:5,marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Capture{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
          <Button
  onPress={ ()=>this.props.navigation.navigate("Home")}
  title="signup"
  color="#1c313a"
  accessibilityLabel="Learn more about this purple button"
     >Next</Button>
     
        </View>
      );
    }
  }
}




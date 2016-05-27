import React from 'react';

class UploadsImage extends React.Component{

 handleUpload(){
  const {image} = this.refs;
  const {uploadImage} = this.props;

  var uploadedImage = (uploadImage(image.files[0]));

  image.value = '';


  this.props.onImageUpload(uploadedImage);
 }

 render(){

  return(
   <div className="form-group">
     <input type="file" ref="image" id="image" name="" className="form-control" accept="image/*" onChange={this.handleUpload.bind(this)}/>
   </div>
  );
 }
}

export default UploadsImage;

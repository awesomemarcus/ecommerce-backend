export default {
 Upload({FS, Bert, Collections}, file){
  if(file){
   const fsFile = new FS.File(file);

   var uploadVar = Collections.Images.insert(fsFile, (err) => {
    if(err){
     return 'error';
    }
   });
   
   return '/cfs/files/Images/' + uploadVar._id;

  }
 },
}

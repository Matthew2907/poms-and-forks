import React, {Component} from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Card (props) {
  return( 
    <div className="card card-body mb-3">
      <img style={{width: "100%"}} src={`http://localhost:5000/image/${props.fileName}`} alt="dog"/>
      <form 
        method="POST" 
        action={`http://localhost:5000/files/${props.fileId}?_method=DELETE`}  // wysyłamy tutaj metodą POST, ale tak na prawdę w query paramsach przesyłam _method=DELETE, które w back-endzie zostanie odebrane przez methodoverwrite
      >
        <button className="btn btn-danger btn-block mt-4">Delete</button>
      </form>
    </div>
  )
};

class App extends Component {
  state={
    selectedFile: null,
    files: [],
  }
  
  componentDidMount(){
    axios.get('http://localhost:5000/')
    .then(res => {
      if(res.data.length > 0){
        const files = Array.from(res.data);        
        this.setState({
          files,
        })
      }
    });
  };

	fileSelectedHandles = (event) => {
      this.setState({
        selectedFile: event.target.files[0],
      })
  };
  
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('http://localhost:5000/upload', fd)
      .then(res => {
        console.log(res);
      });
  };

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 m-auto">
						<h1 className="text-center display-4  my-4">Here are your favourite images!</h1>
						<form action="http://localhost:5000/upload" method="POST" encType="multipart/form-data">
							<div className="custom-file mb-3">
								<input
									onChange={this.fileSelectedHandles}
									type="file"
									name="file"
									id="file"
									className="custom-file-input"
								/>
								<label htmlFor="file" className="custom-file-label">
									Choose File
								</label>
							</div>
							<input
								type="submit"
                value="Submit"
                onSubmit={this.fileUploadHandler}
								className="btn btn-primary btn-block"
							/>
						</form>
            <hr/>
              {this.state.files.length !== 0 ? this.state.files.map((file) => 
                <Card 
                  key={file._id} 
                  fileId={file._id}
                  fileName={file.filename} 
                />
              ) : <div>No images!</div>}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
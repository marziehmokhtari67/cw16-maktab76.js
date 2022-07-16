import React, { Component } from "react";
import {Wrapper ,FormList,Serialize} from './style'
let defaultError = true;
let displayCourse = "none";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      errorName: "",
      errorEmail: "",
      options: [],
      selectValue: "",
      serialize:'',
      course:'',
      pepole:''
    };
  }
  


  componentDidMount() {
    defaultError = false;
  }
  validate = () => {
    this.validateName();
    this.validateEmail();
  };

  handelChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.validate);
  };

  validateName = () => {
    const { name } = this.state;
    if (name === "") {
      this.setState({ errorName: "Name is required" });
    } else {
      this.setState({ errorName: "" });
    }
  };

  validateEmail = () => {
    const { email } = this.state;
    if (email === "") {
      this.setState({ errorEmail: "Email is required" });
    } else {
      this.setState({ errorEmail: "" });
    }
  };

  fillOptions = (values) => {
    const arr = this.props.course[values];
    this.setState({ selectValue: values }, () => {
    
      if (this.state.selectValue === "") {
        displayCourse = "none";
      } else {
        displayCourse = "block";
        this.setState({ options: [...arr] });
      }
    });
  };
  selectedCourse=(e)=>{
    this.setState({course:e.target.value})
  }


  handleSubmit=(e)=>{
    e.preventDefault()
  
    let{name,email,selectValue,course}=this.state
    
    if(name!=='' && email!==''&& selectValue!==''){
      this.setState({pepole:'pepole'})
      this.setState({serialize:name + '-' + email + '-'+ selectValue + '-' + course })
    }
    this.setState({name:''})
    this.setState({email:''})
    this.setState({selectValue:''},()=> { displayCourse="none"})

  }

  render() {
    const { name, email, errorName, errorEmail } = this.state;
    const isValid = errorName === "" && errorEmail === "";

    return (
      <Wrapper>
        <FormList>
          <h1>React Form</h1>
        
          <h3>Sign Up sheet</h3>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handelChange}
            required
          ></input>
          <div className="error-message">{errorName}</div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handelChange}
            required
          ></input>
          <div className="error-message">{errorEmail}</div>
          <label>Department</label>
          <select
            value={this.state.selectValue}
            onInput={(e) => this.fillOptions(e.target.value)}
            name="department"
          >
            <option></option>
            {Object.keys(this.props.course).map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <div style={{ display: displayCourse }}>
            <label>Course</label>
            <div>
            <select name="course" onInput={this.selectedCourse}>
              <option>please select</option>
              {this.state.options.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            </div>
          </div>

          <input
            onClick={this.handleSubmit}
            type="submit"
            value="submitForm"
            disabled={!isValid || defaultError}
          ></input>
        </FormList>
        <Serialize>
          <h5>{this.state.pepole}</h5>
          <p>{this.state.serialize}</p>
        </Serialize>
      </Wrapper>
    );
  }
}
export default Form;

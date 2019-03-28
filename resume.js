import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Moeen Ahmad</h2>
            <h4 style={{color: 'grey'}}>Network Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a Network Engineer Get training From Corvit and online hapy for in Profasional 1 Year Experice in UOG</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Distric Okara , Depalpur</p>
            <h5>Phone</h5>
            <p>03046409698</p>
            <h5>Email</h5>
            <p>moeenahmad5622@gmail.com</p>
            <h5>Web</h5>
            <p>help.uog.edu.pk</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2019}
            
              schoolName=" University Of Gujrat"
              schoolDescription="The University of Gujrat is a public university located in Gujrat, Punjab, Pakistan. It was established under the Act IX of 2004 by Provincial Assembly of the Punjab on 23 February 2004"
               />

               <Education
                 startYear={2012}
                 endYear={2014}
                 schoolName="Tariq Bin Zaid School & College"
                 schoolDescription="Tariq Bin Ziad School & College Sahiwal, Sahiwal, Punjab, Pakistan. 1.1K likes. 8/A, Fateh Sher Colony Sahiwal."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="First Job"
              jobDescription="I am a Network Engineer Get training From Corvit and online hapy for in Profasional 1 Year Experice in UOG"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="I am a Network Engineer Get training From Corvit and online hapy for in Profasional 1 Year Experice in UOG"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Networking CCNA , CCNP , CCNA SECURITY"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;

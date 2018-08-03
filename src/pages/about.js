import React, { Component } from 'react'
import FlexContainer from '../components/flex-container'
import { TcifAnchor } from '../components/app-style'
import styled from 'styled-components'

const Post = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 1rem;
  }
  small {
    color: #9a86ee;
  }
`
export default class About extends Component {
  render() {
    return (
      <FlexContainer
        renderMain={() => {
          return (
            <Post>
              <h2>About the blog</h2>
              <p>
                <strong>
                  <em>Try Coding, It's Fun</em>
                </strong>{' '}
                is dedicated to helping developers, self-taught or otherwise, love what they code.
                We strongly identify with the idea that coding, no matter the discipline or nature,
                is an extension of what's on your mind, limited only by your own creativity.
              </p>
              <p>
                Coding is an art as much as it is a science. What you create may be technical and
                sophisticated in operation, beautiful and fluid in design, or any combination of
                both. Write code that makes you excited, and you'll love the creations that follow.
              </p>
              <h2>About the author</h2>
              <p>
                <strong>
                  <TcifAnchor href="https://twitter.com/radotreyes">Reuben Reyes</TcifAnchor>
                </strong>{' '}
                is a self-taught developer with a passion for humoring his imagination, over-sharing
                what he's excited about, and writing sometimes unnecessarily complex code. His
                professional statement is something along the lines of "...translating minimalistic
                and steadfast design style into web platforms".
              </p>
              <p>
                Currently working on{' '}
                <em>
                  <TcifAnchor href="https://ydkjs-exercises.com">YDKJS Exercises</TcifAnchor>
                </em>{' '}
                (open-source, contributors welcome!) and helping out with the East Bay React Meetup
                Group (<TcifAnchor href="https://discord.gg/efHguJS">
                  Join us on Discord!
                </TcifAnchor>)
              </p>
            </Post>
          )
        }}
        renderSidebar={() => (
          <div>
            <p>Shameless plugs:</p>
            <TcifAnchor href="https://reubenreyes.com">
              <small>More about the author</small>
            </TcifAnchor>
            <br />
            <TcifAnchor href="https://ydkjs-exercises.com">
              <small>YDKJS Exercises</small>
            </TcifAnchor>
            <br />
            <TcifAnchor href="https://www.meetup.com/East-Bay-React-Meetup-Group/">
              <small>East Bay React Meetup Group</small>
            </TcifAnchor>
          </div>
        )}
      />
    )
  }
}

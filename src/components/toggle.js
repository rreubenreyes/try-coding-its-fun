import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Toggle extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    show: PropTypes.bool,
  }

  static defaultProps = {
    show: false,
  }

  state = { show: this.props.show }

  handleToggle = () => {
    this.setState(prevState => ({ show: !prevState.show }))
  }

  render() {
    const { children } = this.props
    return children({ show: this.state.show, toggle: this.handleToggle })
  }
}

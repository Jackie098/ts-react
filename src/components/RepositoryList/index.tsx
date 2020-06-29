import React, { Component } from 'react'

interface Repository {
  id: number;
  name: string;
}

interface Props {
  repositories: Repository[];
}

export default class RepositoryList extends Component {
  state = {
    newRepository: '',
  }

  componentDidMount() { }

  render() {
    const { repositories } = this.props;

    return <h1>Hello again!!!s</h1>
  }
}
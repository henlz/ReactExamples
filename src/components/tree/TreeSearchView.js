import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class TreeSearchView extends Component {
  state = {
    search: '',
    inputError: false
  };

  nodeTree = {
    id: 1,
    label: 'a',
    children: [{
      id: 2,
      label: 'B',
      children: [{
        id: 5,
        label: 'E'
      }, {
        id: 6,
        label: 'F'
      }, {
        id: 7,
        label: 'G'
      }]
    }, {
      id: 3,
      label: 'C'
    }, {
      id: 4,
      label: 'D',
      children: [{
        id: 8,
        label: 'H'
      }, {
        id: 9,
        label: 'I'
      }]
    }]
  };

  searchTreeById = (nodeId, node) => {
    if (node === null) {
      return nodeId;
    } else {
      if (nodeId === node.id) {
        return node.label;
      }

      if (node.children && node.children.length > 0) {
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (child.id === nodeId) {
            return child.label;
          }
        }

        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (child.children && child.children.length > 0) {
            const result = this.searchTreeById(nodeId, child);
            if (typeof result === 'string') {
              return result;
            }
          }
        }
      }
    }
  };

  doSearch = () => {
    if (this.state.search) {
      const result = this.searchTreeById(parseInt(this.state.search), this.nodeTree);
      if (result) {
        alert(result);
      } else {
        alert('Not found');
      }
      this.setState({inputError: false});
    } else {
      this.setState({inputError: true});
    }
  };

  render() {
    return (
      <div>
        <TextField id="search"
                   label="search"
                   value={this.state.search}
                   min='0'
                   type='number'
                   error={this.state.inputError}
                   required
                   onChange={event => this.setState({search: event.target.value})}/>
        <Button color="primary"
                raised
                onClick={this.doSearch}>
          Search
        </Button>
      </div>
    )
  }
}

export default TreeSearchView;

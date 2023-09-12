import React, { Component } from 'react'

export class Categores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categores: [
                {
                    key: 'all',
                    name: 'Все',
                },

                {
                    key: 'Bmw',
                    name: 'Bmw',
                },

                {
                    key: 'Audi',
                    name: 'Audi',
                },

                {
                    key: 'Ferrari',
                    name: 'Ferrari',
                },
                
                {
                    key: 'Lamborgini',
                    name: 'Lamborgini',
                }
            ]
        }
    }
  render() {
    return (
      <div className='categores'>
        {this.state.categores.map(el => (
            <div key={el.key} onClick={() => this.props.cooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categores
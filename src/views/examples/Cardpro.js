
import React from 'react'
import { Button,  Modal } from "reactstrap";
class Cardpro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,

        }
    }
    show = () => {
        this.setState({
            show: true

        })
        console.log("show")
    }
    close = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (

            <>
                <Button onClick={this.show}><a href="https://stack-developers.github.io/Co-Travel/" target="_blank">project 201(CO-TRAVEL)</a></Button>



                <Modal show={this.state.show} onHide={this.Close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.Close}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.Close}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>


        )
    }

}
export default Cardpro
import React from "react";
import {Modal} from "react-bootstrap";
import "./VideoModal.scss";

class VideoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trailer: "",
    };
  }

  render() {
    let key = this.props.trailer;
    let src = `https://www.youtube.com/embed/${key}`;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <iframe
            width="100%"
            height="100%"
            src={src}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    );
  }
}

export default VideoModal;

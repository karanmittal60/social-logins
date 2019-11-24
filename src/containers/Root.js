import React, {Component} from 'react';
import FacebookIntegration from "../components/facebook";
import GmailIntegration from "../components/gmail";
import TwitterIntegration from "../components/twitter";
import InstaIntegration from "../components/instagram";

class Root extends Component {
    render() {
        return (
            <div>
                <FacebookIntegration/>
                <GmailIntegration/>
                <TwitterIntegration/>
                <InstaIntegration/>
            </div>
        );
    }
}

export default Root;
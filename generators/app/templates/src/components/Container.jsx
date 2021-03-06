/**
 * SunEee
 * @date Created on 11/13/15
 * @author YuHui(语晖)<yuhui@suneee.com>
 */


import React from 'react';
import MainBody from './MainBody';
import SideBar from './SideBar';
import {Row,Col} from 'antd';


export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {

    }


    componentWillUnmount() {

    }

    render() {
        const {children,sidebar} = this.props;

        console.log(sidebar)
        return (

            <div className="container-router-wrap">
                <Row>
                    <Col span="5">
                        <SideBar type={sidebar}></SideBar>
                    </Col>
                    <Col span="19">
                        <MainBody>
                            {
                                children
                            }
                        </MainBody>
                    </Col>
                </Row>
            </div>)

    }

}



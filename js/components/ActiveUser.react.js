import React, {Component, PropTypes} from 'react';

export default class ActiveUser extends Component {
    render() {
        return (
            <div class="col-sm-4 col-md-3 col-lg-2">
                <div class="thumbnail">
                    <img src="images/raccoon.svg"/>
                    <div class="thumbnail-caption">
                        <h3>Zachary Tucker</h3>
                        <table class="user-info table table-responsive">
                            <tbody>
                            <tr>
                                <td>Age:</td>
                                <td>21</td>
                            </tr>
                            <tr>
                                <td>Favorite animal:</td>
                                <td>raccoon</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>
                                    <span>8</span>
                                    <span>(714) 385-2465</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p>
                            <b>Favorite phrase:</b><span> </span>
                            <span>Liti ifo niwpafca dof bobuneh rilkeb uweuk wobbep lewvi pib moomeuvu roguge ajadiz dis lenmoj.</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
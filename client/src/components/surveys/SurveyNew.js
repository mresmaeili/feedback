import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
  state = { review: false };
  renderContent() {
    if (this.state.review) {
      return (
        <SurveyFormReview onCancel={() => this.setState({ review: false })} />
      );
    }
    return (
      <SurveyForm onSurveySubmit={() => this.setState({ review: true })} />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({ form: 'surveyForm' })(SurveyNew);

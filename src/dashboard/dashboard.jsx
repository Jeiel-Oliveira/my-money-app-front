import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../commom/template/contentHeader'
import Content from '../commom/template/content'
import ValueBox from '../commom/widget/valueBox'
import Row from '../commom/layout/row'
import valueBox from '../commom/widget/valueBox'


class Dashboard extends Component {
    
    componentWillMount(){
        this.props.getSummary((res, req) => {})
    }

    render() {
        const { credit, debt } = this.props.summary                 

        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />                

                <Content ref={this.refCallback}>                                        
                    <Row>                        
                        <ValueBox                                
                            cols='12 4' color='green' icon='bank' 
                            value={`R$ ${credit}`} text='Total de Créditos'
                        />

                        <ValueBox 
                            cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos'
                        />

                        <ValueBox 
                            cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debt}`} text='Valor Consolidado'
                        />
                    </Row>                                                                                                    
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
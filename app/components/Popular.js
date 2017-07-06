var React = require('react');

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.updateLanguage = this.updateLanguage.bind(this);
        this.state = {
            selectedLanguage: 'All'
        };
    }
    updateLanguage (lang) {
        this.setState(function(){
            return {               
                selectedLanguage: lang
            }
        })
    }
    render() {
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        
        return(
            <ul className="languages">          
             {languages.map( (lang) => {
                return(
                    <li 
                        style={lang === this.state.selectedLanguage ? { color: '#d0021b' }: null}
                        key={lang}
                        onClick={this.updateLanguage.bind(null, lang)}>
                        {lang}
                    </li>
                 )
             })}
            </ul>
        )
    }
}
module.exports = Popular;
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './model/Education';
import Experience from './model/Experience';
import Skills from './model/Skills';

class Resume extends Component {
    render() {
        return (
            <Grid>
                <Cell col={ 4 } className="resume-about-me">
                    <img 
                        src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
                        alt="avatar"
                    />
                    <h2>Cezary Sanecki</h2>
                    <h4>Java Developer</h4>
                    <hr />
                    <p>
                        Moim celem zawodowym jest zostanie doświadczonym programistą Java ze znajomością 
                        zagadnień dotyczących architektury oprogramowania. Uważam, że praca zespołowa jest 
                        największą siłą realizowanego projektu. Posiadam prawie dwuletnie doświadczenie 
                        programistyczne, które zdobywałem na projektach dla dużego klienta z Niemiec, 
                        największego banku w Polsce oraz także w polskich firmach. Jestem odpowiedzialny 
                        za rozwiązywanie problemów biznesowych i ich implementację. W wolnym czasie ciągle 
                        pogłębiam wiedzę, aby spełnić swoje postanowienia.
                    </p>
                    <hr className="resume-bottom-hr"/>
                </Cell>
                <Cell col={ 8 } className="resume-experience">
                    <h3 className="resume-experience-title">Doświadczenie</h3>

                    <Experience startYear="2019/06" endYear="obecnie"
                        jobName="LekSeek Polska Sp. z o.o. Sp. k."
                        jobProfession="Programista JAVA"
                        jobDescription={
                            [`Programowanie w Javie 8, 11`,
                            `Używanie framework’ów Spring (MVC, Security) i Hibernate`,
                            `Korzystanie z Git, SVN, MySQL i REST`,
                            `Wykorzystywanie wewnętrznego fremawork’a J2J (Java to JavaScript)`] }
                    />
                    <Experience startYear="2019/03" endYear="2019/05"
                        jobName="Grupa Exorigo-Upos sp. z o.o. "
                        jobProfession="Programista JAVA/Analityk"
                        jobDescription={
                            [`Programowanie w Javie 8`,
                            `Używanie framework’ów Spring (MVC, Security) i Hibernate`,
                            `Korzystanie z Git, Oracle database i REST`,
                            `Używanie kostek OLAP’owych`,
                            `Programowanie frontend'owe w JavaScript/JQuery`] }
                    />
                    <Experience startYear="2018/04" endYear="2019/02"
                        jobName="Accenture Services Sp. z o.o."
                        jobProfession="Mainframe Core Banking Developer"
                        jobDescription={
                            ['Programowanie w COBOL, CICS i JCL na z/OS',
                            'Tworzenie dokumentacji',
                            'Programowanie w Javie na potrzeby replatformingu'] }
                    />
                    <Experience startYear="2017/01" endYear="2018/02"
                        jobName="PKBI - Pracownia Konstrukcji Budowlano-Inżynieryjnych"
                        jobProfession="Asystent projektanta konstrukcji"
                    />
                    <Experience startYear="2016/10" endYear="2016/12"
                        jobName="Electronic Control Systems Sp. z o.o."
                        jobProfession="Asystent projektanta konstrukcji"
                    />
                    
                    <hr />
                    <h3 className="resume-experience-title">Wykształcenie</h3>

                    <Education startYear="2018/02" endYear="obecnie"
                        schoolName="Politechnika Warszawska"
                        schoolProfile="Informatyka, Systemy Internetowe Wspomagania Zarządzania"
                        schoolDescription="magisterskie, studia niestacjonarne"
                    />
                    <Education startYear="2016/07" endYear="2018/07"
                        schoolName="Politechnika Warszawska"
                        schoolProfile="Budownictwo, Konstrukcje Budowlane i Inżynierskie"
                        schoolDescription="magisterskie, studia niestacjonarne, ocena: celująca"
                    />
                    <Education startYear="2012/07" endYear="2016/07"
                        schoolName="Politechnika Warszawska"
                        schoolProfile="Budownictwo, Konstrukcje Budowlane i Inżynierskie"
                        schoolDescription="inżynierskie, studia stacjonarne, ocena: bardzo dobra"
                    />

                    <hr />
                    <h3 className="resume-experience-title">Umiejętności</h3>

                    <Skills skill="Java" progress={ 75 } />
                    <Skills skill="Spring" progress={ 60 } />
                    <Skills skill="Hibernate" progress={ 50 } />
                    <Skills skill="Git" progress={ 50 } />
                    <Skills skill="SVN" progress={ 40 } />
                    <Skills skill="MySQL" progress={ 60 } />
                    <Skills skill="Eclipse" progress={ 50 } />
                    <Skills skill="IntelliJ" progress={ 40 } />
                    <Skills skill="JUnit" progress={ 40 } />
                    <Skills skill="React" progress={ 15 } />
                    <Skills skill="Linux" progress={ 15 } />
                </Cell>
            </Grid>
        )
    }
}

export default Resume;
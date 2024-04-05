
const resume = {
    personName: "Brian Hodgert".toUpperCase(),
    career: "Full Stack Engineer",
    description: "I like ducks",
    interests: ['philosophy', 'coding', 'design'],
    experience: [
        { company: 'SBGH', role: 'Electronic Technologist', description: 'Fix Electronics' },
        { company: 'HSC', role: 'Biomedical Technologist', description: "Fix Medical Equipment" },
        { company: 'Manco Controls', role: 'Instrumentation Technician', description: "Calibrate sensors" }
    ],
    skills: [
        { skill: "coding", cool: true },
        { skill: "sophistry", cool: false },
        { skill: "troubleshooting", cool: false },
        { skill: "renovations", cool: false }
    ],
    displayInterests: interests => {
        let interestLines = 'My interests: ' + '\n'
        interests.forEach(interest => { 
            interestLines += `* ${interest}` + '\n'
        })
        return interestLines + '\n'
    },
    displayPositions : experience => {
        let experienceLines = 'My Previous Experence: ' + '\n'
        experience.forEach(job => {
            const { company, role, description } = job
            experienceLines += (`* ${role} at ${company} - ${description}`) + '\n'
        })
        return experienceLines + '\n'
    },
    displaySkills : skills => {
        let skillLines = 'My Skills: ' + '\n'
        skills.forEach( thisSkill => {
            const {skill, cool} = thisSkill
            let skillLine = '* '
            !(cool) ? skillLine += skill + '\n': skillLine += 'BAM: ' + skill + '\n'
            skillLines += skillLine         
        })
        return skillLines + '\n'
    }
}

const buildResume = resume => {
    const { personName, career, description, interests, experience, skills } = resume
    return `Name: ${personName}` + '\n' +
    `Career: ${career}` + '\n' +
    `Description: ${description}` + '\n' + 
    '\n' + 
    resume.displayInterests(interests) +
    resume.displayPositions(experience) +
    resume.displaySkills(skills)

}

console.log(buildResume(resume))


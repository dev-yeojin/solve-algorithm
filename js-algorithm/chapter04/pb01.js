function processData(input) {
    let s = "";
    const lines = input.split('\n').slice(1);
    let prevCommand;
    let deletedChar;
    
    lines.forEach((l) => {
        const line = l.split(' ').map(v => v.toString());
        
        if (line[0] === '1' || line[0] === '2') {
            prevCommand = line;
        } else {
            prevCommand = null;
        }
        switch(line[0]) {
            case '1': {
                s = s.concat(line[1]);
                break;
            }
            case '2': {
                s = s.substr(0, s.length-1);
                deletedChar = s[s.length-1];
                break;
            }
            case '3': {
                const index = Number(line[1]);
                console.log(s[index]);
                break;
            }
            case '4': {
                if (prevCommand) {
                    const prevLine = prevCommand.split(' ').map(v => v.toString());
                    
                    if (prevLine[0] === 1) {
                        s = s.substr(0, s.length - prevLine[1].length); 
                    } else if (prevLine[0] === 2) {
                          s = s.concat(deletedChar);
                        }
                    
                    }
                break;
            }
        }
    })
}
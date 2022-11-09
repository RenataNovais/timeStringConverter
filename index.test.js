const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles quarter - 2:15', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });

  describe('handles hour', () => {
    it('Two o\'clock', () => {
      const timeInWords = convertTimeToWords('2:00');
      expect(timeInWords).toBe('two o\'clock');
    });

    it('Five o\'clock', () => {
      const timeInWords = convertTimeToWords('5:00');
      expect(timeInWords).toBe('five o\'clock');
    });

    it('Ten o\'clock', () => {
      const timeInWords = convertTimeToWords('10:00');
      expect(timeInWords).toBe('ten o\'clock');
    });
  })

  describe('Handles times until 30 mins', () => {
    it('2:11', () => {
      const timeInWords = convertTimeToWords('2:11');
      expect(timeInWords).toBe('eleven past two');
    });
  
    it('2:03', () => {
      const timeInWords = convertTimeToWords('2:03');
      expect(timeInWords).toBe('three past two');
    });
  })
  
  describe('Handles times after 30 mins', () => {
    it('should say quarter to hour when minutes are 45', () => {
      const timeInWords = convertTimeToWords('2:45');
      expect(timeInWords).toBe('quarter to three');
    });

    it('2:33', () => {
      const timeInWords = convertTimeToWords('2:33');
      expect(timeInWords).toBe('twenty seven to three');
    });
  
    it('2:40', () => {
      const timeInWords = convertTimeToWords('2:40');
      expect(timeInWords).toBe('twenty to three');
    });
  
    it('2:55', () => {
      const timeInWords = convertTimeToWords('2:55');
      expect(timeInWords).toBe('five to three');
    });
  })
});

export const saveImage = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  
  export const saveWhisky = async (whiskyData) => {
    try {
      const whiskies = JSON.parse(localStorage.getItem('whiskies') || '[]');
      
      if (whiskyData.image instanceof File) {
        whiskyData.image = await saveImage(whiskyData.image);
      }
      
      if (whiskyData.id) {
        // Update existing
        const index = whiskies.findIndex(w => w.id === whiskyData.id);
        if (index !== -1) {
          whiskies[index] = whiskyData;
        }
      } else {
        // Add new
        whiskyData.id = Date.now().toString();
        whiskies.push(whiskyData);
      }
      
      localStorage.setItem('whiskies', JSON.stringify(whiskies));
      return whiskyData;
    } catch (error) {
      console.error('Error saving whisky:', error);
      throw error;
    }
  };
  
  export const getWhiskies = () => {
    try {
      return JSON.parse(localStorage.getItem('whiskies') || '[]');
    } catch (error) {
      console.error('Error getting whiskies:', error);
      return [];
    }
  };
  
  export const deleteWhisky = (id) => {
    try {
      const whiskies = JSON.parse(localStorage.getItem('whiskies') || '[]');
      const filteredWhiskies = whiskies.filter(w => w.id !== id);
      localStorage.setItem('whiskies', JSON.stringify(filteredWhiskies));
    } catch (error) {
      console.error('Error deleting whisky:', error);
      throw error;
    }
  };
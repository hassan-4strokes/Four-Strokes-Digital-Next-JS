import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Table from "@editorjs/table";
import Underline from "@editorjs/underline";
import Code from "@editorjs/code";
import Raw from "@editorjs/raw";
import Warning from "@editorjs/warning";

export const EditorJSTools = {
  embed: Embed,
  header: {
    class: Header,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  image: {
    class: Image,
    config: {
      uploader: {
        // Upload image by file
        uploadByFile(file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', 'Four_Strokes_Digital');
          formData.append('cloud_name', 'dbvgw0lqg');

          return fetch('https://api.cloudinary.com/v1_1/dbvgw0lqg/image/upload', {
            method: 'POST',
            body: formData,
          })
            .then(response => response.json())
            .then(data => {
              if (data.secure_url) {
                return {
                  success: 1,
                  file: {
                    url: data.secure_url,
                  },
                };
              } else {
                console.error('Error: Cloudinary did not return a valid image URL', data);
                return {
                  success: 0,
                  message: 'Failed to upload image',
                };
              }
            })
            .catch(error => {
              console.error('Error uploading image:', error);
              return {
                success: 0,
                message: 'Failed to upload image',
              };
            });
        },
        
        // Upload image by URL
        uploadByUrl(imageUrl) {
          const formData = new FormData();
          formData.append('file', imageUrl);
          formData.append('upload_preset', 'Four_Strokes_Digital');
          formData.append('cloud_name', 'dbvgw0lqg');

          return fetch('https://api.cloudinary.com/v1_1/dbvgw0lqg/image/upload', {
            method: 'POST',
            body: formData,
          })
            .then(response => response.json())
            .then(data => {
              if (data.secure_url) {
                return {
                  success: 1,
                  file: {
                    url: data.secure_url,
                  },
                };
              } else {
                console.error('Error: Cloudinary did not return a valid image URL', data);
                return {
                  success: 0,
                  message: 'Failed to upload image',
                };
              }
            })
            .catch(error => {
              console.error('Error uploading image from URL:', error);
              return {
                success: 0,
                message: 'Failed to upload image from URL',
              };
            });
        }
      }
    },
    inlineToolbar: true,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
  },
  marker: Marker,
  table: {
    class: Table,
    inlineToolbar: true,
  },
  underline: Underline,
  code: Code,
  warning: Warning,
  raw: Raw,
  inlineCode: InlineCode,
};
'use server'

export async function shareMeal(formData){
    'use server';

    const meal= {
        title : formData.get('title'),
        summary : formData.get('summary'),
        instructions:  formData.get('instructions') ,
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        image: formData.get('image'),

    }
    console.info(meal)
} 
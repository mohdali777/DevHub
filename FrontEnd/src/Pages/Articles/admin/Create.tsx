import React, { useState } from 'react';
import { 
Save, 
Eye, 
X, 
Image,
Tag,
FileText,
Layers
} from 'lucide-react';
import BackButton from '../../../Components/Layout/BackButton';
import Textinput from '../../../Components/input/textinput';
import FileInput from '../../../Components/input/FileInput';
import ListInput from '../../../Components/input/textinputwithbutton';
import type { Article } from '../../../Interface/Article';
import SelectInput from '../../../Components/input/SelectInput';
import RadioInput from '../../../Components/input/RadioInput';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../Redux/store';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

const CreateArticleForm = () => {
const [article, setArticle] = useState<Partial<Article>>({
title: '',
tags: [],
category: '',
status: 'draft'
});
const [file,SetFile] = useState<null|File>(null)
const [coverPreview, setCoverPreview] = useState<string|null>(null);
const {UserId} = useSelector((state:RootState)=>state.auth)
// Sample categories (would come from API)
const categories = [
{ id: '1', name: 'DevOps' },
{ id: '2', name: 'Architecture' },
{ id: '3', name: 'Frontend' },
{ id: '4', name: 'Backend' },
{ id: '5', name: 'AI/ML' }
];


const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
const title = e.target.value;
setArticle({
...article,
title
});
};

const handleCoverImageUpload = (e:React.ChangeEvent<HTMLInputElement>) => {
const file = e?.target?.files?.[0]  
if (file) {
SetFile(file)    
const reader = new FileReader();
reader.onloadend = () => {
const base64String  = reader.result;
setCoverPreview(base64String as string);
};
reader.readAsDataURL(file);
}
};

const removeCoverImage = () => {
setCoverPreview(null);
setArticle({
...article,
cover_image: {
image_url: '',
public_id: ''
}
});
};

const addTag = (Value:string) => {
if (Value.trim() && !(article.tags as string[]).includes(`#${Value.trim()}`)) {
setArticle({
...article,
tags: [...(article.tags as string[]), `#${Value.trim()}`]
});
}
};

const removeTag = (tagToRemove:string) => {
setArticle({
...article,
tags: (article.tags as string[]).filter(tag => tag !== tagToRemove)
});
};

const handleSubmit = (status:string) => {
const articleData:Partial<Article> = {
...article,
author:UserId as string
};
const Form = new FormData()
Form.append("data",JSON.stringify(articleData))
Form.append("CoverImage",file as File)
try {
    
} catch (error) {
if(error instanceof AxiosError){
toast.error(error.response?.data.message||"failed to create")
}else{
toast.error("failed to create")
}
}
};

return (
<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
{/* Header */}
<BackButton OnSubmit={function (): void {
throw new Error('Function not implemented.');
} }/>
{/* Main Content */}
<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="mb-8">
<h1 className="text-4xl font-black text-gray-900 mb-2">Create New Article</h1>
<p className="text-gray-600">Fill in the details to create your article</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Main Form */}
<div className="lg:col-span-2 space-y-6">
{/* Title */}
<Textinput Value={article.title as string} OnChange={(e)=>handleTitleChange(e)} Icon={FileText} Label={' Article Title *'}  PlaceHolder="Enter a compelling article title..."/>
{/* Slug */}
{/* Cover Image */}
<div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
<label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
<Image className="w-5 h-5 text-blue-600" />
Cover Image *
</label>

{!coverPreview ? (
<FileInput AcceptType={'image/*'} onUpload={(e)=>handleCoverImageUpload(e)} PlaceHolder={'PNG, JPG or WEBP (MAX. 2MB)'} />
) : (
<div className="relative">
<img
src={coverPreview}
alt="Cover preview"
className="w-full h-64 object-cover rounded-xl"
/>
<button
onClick={removeCoverImage}
className="absolute top-3 right-3 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
>
<X className="w-5 h-5" />
</button>
</div>
)}
</div>
{/* Tags */}
<ListInput OnSubmit={addTag} OnRemove={removeTag} Icon={Tag} Label={'Tags'} PlaceHolder={'Add a tag and press Enter'} ListValues={article.tags as string[]} />
</div>

{/* Sidebar */}
<div className="space-y-6">
{/* Category */}
<SelectInput Value={article.category as string} OnChange={(e) => setArticle({ ...article, category: e.target.value })} Icon={Layers} Label={"Category *"} PlaceHolder={''} List={categories}/>
{/* Status */}

<RadioInput Value={article.status as string} OnChange={(e) => setArticle({ ...article, status: (e.target.value as "published" | "draft" | "blocked" | "archived") })} Icon={FileText} Label={'Publication Status'} PlaceHolder={''} List={['draft', 'published']}/>

{/* Article Info */}
<div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
<h3 className="text-sm font-bold text-gray-900 mb-3">📝 Article Info</h3>
<div className="space-y-2 text-sm">
<div className="flex justify-between">
<span className="text-gray-600">Views:</span>
<span className="font-semibold text-gray-900">0</span>
</div>
<div className="flex justify-between">
<span className="text-gray-600">Likes:</span>
<span className="font-semibold text-gray-900">0</span>
</div>
<div className="flex justify-between">
<span className="text-gray-600">Status:</span>
<span className={`font-semibold capitalize ${
article.status === 'published' ? 'text-green-600' : 
article.status === 'draft' ? 'text-yellow-600' : 
'text-gray-600'
}`}>
{article.status}
</span>
</div>
</div>
</div>

{/* Quick Tips */}
<div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
<h3 className="text-sm font-bold text-gray-900 mb-3">💡 Quick Tips</h3>
<ul className="space-y-2 text-sm text-gray-700">
<li className="flex items-start gap-2">
<span className="text-yellow-600">•</span>
<span>Use a compelling title that attracts readers</span>
</li>
<li className="flex items-start gap-2">
<span className="text-yellow-600">•</span>
<span>Add relevant tags to improve discoverability</span>
</li>
<li className="flex items-start gap-2">
<span className="text-yellow-600">•</span>
<span>Choose a high-quality cover image</span>
</li>
<li className="flex items-start gap-2">
<span className="text-yellow-600">•</span>
<span>Keep URL slugs short and descriptive</span>
</li>
</ul>
</div>
</div>
</div>

{/* Action Buttons (Mobile) */}
<div className="lg:hidden flex gap-3 mt-8">
<button 
onClick={() => handleSubmit('draft')}
className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 font-semibold transition-all"
>
<Save className="w-5 h-5" />
Save Draft
</button>
<button 
onClick={() => handleSubmit('published')}
className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl font-semibold transition-all"
>
<Eye className="w-5 h-5" />
Publish
</button>
</div>
</main>
</div>
);
};

export default CreateArticleForm;
import React, { useState } from 'react';
import { X, Plus, Image, Link, MoveUp, MoveDown, Trash2 } from 'lucide-react';

interface ImageData {
  image: {
    image_url: string;
    public_id: string;
  };
  caption: string;
}

interface LinkData {
  url: string;
  caption: string;
}

interface ContentBlock {
  _id?: string;
  heading: string;
  text: string;
  list: string[];
  images: ImageData[];
  links: LinkData[];
  sort_order: number;
}

interface SubArticle {
  article_id: string;
  title: string;
  content_blocks: ContentBlock[];
  sort_order: number;
}

export default function SubArticleEditor() {
  const [subArticle, setSubArticle] = useState<SubArticle>({
    article_id: '',
    title: '',
    content_blocks: [],
    sort_order: 0
  });

  const addContentBlock = () => {
    const newBlock: ContentBlock = {
      heading: '',
      text: '',
      list: [],
      images: [],
      links: [],
      sort_order: subArticle.content_blocks.length
    };
    setSubArticle({
      ...subArticle,
      content_blocks: [...subArticle.content_blocks, newBlock]
    });
  };

  const updateContentBlock = (index: number, field: keyof ContentBlock, value: any) => {
    const updatedBlocks = [...subArticle.content_blocks];
    updatedBlocks[index] = { ...updatedBlocks[index], [field]: value };
    setSubArticle({ ...subArticle, content_blocks: updatedBlocks });
  };

  const deleteContentBlock = (index: number) => {
    const updatedBlocks = subArticle.content_blocks.filter((_, i) => i !== index);
    updatedBlocks.forEach((block, i) => block.sort_order = i);
    setSubArticle({ ...subArticle, content_blocks: updatedBlocks });
  };

  const moveContentBlock = (index: number, direction: 'up' | 'down') => {
    if ((direction === 'up' && index === 0) || 
        (direction === 'down' && index === subArticle.content_blocks.length - 1)) {
      return;
    }
    
    const updatedBlocks = [...subArticle.content_blocks];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    [updatedBlocks[index], updatedBlocks[newIndex]] = [updatedBlocks[newIndex], updatedBlocks[index]];
    updatedBlocks.forEach((block, i) => block.sort_order = i);
    setSubArticle({ ...subArticle, content_blocks: updatedBlocks });
  };

  const addListItem = (blockIndex: number) => {
    const block = subArticle.content_blocks[blockIndex];
    updateContentBlock(blockIndex, 'list', [...block.list, '']);
  };

  const updateListItem = (blockIndex: number, listIndex: number, value: string) => {
    const block = subArticle.content_blocks[blockIndex];
    const updatedList = [...block.list];
    updatedList[listIndex] = value;
    updateContentBlock(blockIndex, 'list', updatedList);
  };

  const removeListItem = (blockIndex: number, listIndex: number) => {
    const block = subArticle.content_blocks[blockIndex];
    const updatedList = block.list.filter((_, i) => i !== listIndex);
    updateContentBlock(blockIndex, 'list', updatedList);
  };

  const handleImageUpload = async (blockIndex: number, files: FileList | null) => {
    if (!files || files.length === 0) return;

    const block = subArticle.content_blocks[blockIndex];
    const newImages: ImageData[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      
      await new Promise((resolve) => {
        reader.onloadend = () => {
          newImages.push({
            image: {
              image_url: reader.result as string,
              public_id: `temp_${Date.now()}_${i}`
            },
            caption: ''
          });
          resolve(null);
        };
        reader.readAsDataURL(file);
      });
    }

    updateContentBlock(blockIndex, 'images', [...block.images, ...newImages]);
  };

  const updateImageCaption = (blockIndex: number, imageIndex: number, caption: string) => {
    const block = subArticle.content_blocks[blockIndex];
    const updatedImages = [...block.images];
    updatedImages[imageIndex] = { ...updatedImages[imageIndex], caption };
    updateContentBlock(blockIndex, 'images', updatedImages);
  };

  const removeImage = (blockIndex: number, imageIndex: number) => {
    const block = subArticle.content_blocks[blockIndex];
    const updatedImages = block.images.filter((_, i) => i !== imageIndex);
    updateContentBlock(blockIndex, 'images', updatedImages);
  };

  const addLink = (blockIndex: number) => {
    const block = subArticle.content_blocks[blockIndex];
    updateContentBlock(blockIndex, 'links', [...block.links, { url: '', caption: '' }]);
  };

  const updateLink = (blockIndex: number, linkIndex: number, field: keyof LinkData, value: string) => {
    const block = subArticle.content_blocks[blockIndex];
    const updatedLinks = [...block.links];
    updatedLinks[linkIndex] = { ...updatedLinks[linkIndex], [field]: value };
    updateContentBlock(blockIndex, 'links', updatedLinks);
  };

  const removeLink = (blockIndex: number, linkIndex: number) => {
    const block = subArticle.content_blocks[blockIndex];
    const updatedLinks = block.links.filter((_, i) => i !== linkIndex);
    updateContentBlock(blockIndex, 'links', updatedLinks);
  };

  const handleSubmit = () => {
    console.log('Sub Article Data:', JSON.stringify(subArticle, null, 2));
    alert('Check console for sub article data');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Sub Article Editor</h1>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Article ID</label>
              <input
                type="text"
                value={subArticle.article_id}
                onChange={(e) => setSubArticle({ ...subArticle, article_id: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter article ID"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sub Article Title</label>
              <input
                type="text"
                value={subArticle.title}
                onChange={(e) => setSubArticle({ ...subArticle, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter sub article title"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort Order</label>
              <input
                type="number"
                value={subArticle.sort_order}
                onChange={(e) => setSubArticle({ ...subArticle, sort_order: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {subArticle.content_blocks.map((block, blockIndex) => (
          <div key={blockIndex} className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Content Block {blockIndex + 1}</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => moveContentBlock(blockIndex, 'up')}
                  disabled={blockIndex === 0}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50"
                >
                  <MoveUp size={18} />
                </button>
                <button
                  onClick={() => moveContentBlock(blockIndex, 'down')}
                  disabled={blockIndex === subArticle.content_blocks.length - 1}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50"
                >
                  <MoveDown size={18} />
                </button>
                <button
                  onClick={() => deleteContentBlock(blockIndex)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                <input
                  type="text"
                  value={block.heading}
                  onChange={(e) => updateContentBlock(blockIndex, 'heading', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter heading"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Text Content</label>
                <textarea
                  value={block.text}
                  onChange={(e) => updateContentBlock(blockIndex, 'text', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter text content"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">List Items</label>
                  <button
                    onClick={() => addListItem(blockIndex)}
                    className="flex items-center gap-1 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded"
                  >
                    <Plus size={16} /> Add Item
                  </button>
                </div>
                <div className="space-y-2">
                  {block.list.map((item, listIndex) => (
                    <div key={listIndex} className="flex gap-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => updateListItem(blockIndex, listIndex, e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={`List item ${listIndex + 1}`}
                      />
                      <button
                        onClick={() => removeListItem(blockIndex, listIndex)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">Images</label>
                  <label className="flex items-center gap-1 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded cursor-pointer">
                    <Image size={16} /> Upload Images
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleImageUpload(blockIndex, e.target.files)}
                      className="hidden"
                    />
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {block.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="border border-gray-300 rounded-lg p-3">
                      <div className="relative mb-2">
                        <img
                          src={img.image.image_url}
                          alt={img.caption || 'Uploaded image'}
                          className="w-full h-40 object-cover rounded"
                        />
                        <button
                          onClick={() => removeImage(blockIndex, imgIndex)}
                          className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={img.caption}
                        onChange={(e) => updateImageCaption(blockIndex, imgIndex, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Image caption"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">Links</label>
                  <button
                    onClick={() => addLink(blockIndex)}
                    className="flex items-center gap-1 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded"
                  >
                    <Link size={16} /> Add Link
                  </button>
                </div>
                <div className="space-y-2">
                  {block.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="flex gap-2 items-start">
                      <div className="flex-1 space-y-2">
                        <input
                          type="url"
                          value={link.url}
                          onChange={(e) => updateLink(blockIndex, linkIndex, 'url', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter URL"
                        />
                        <input
                          type="text"
                          value={link.caption}
                          onChange={(e) => updateLink(blockIndex, linkIndex, 'caption', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Link caption"
                        />
                      </div>
                      <button
                        onClick={() => removeLink(blockIndex, linkIndex)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded mt-1"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex gap-4">
          <button
            onClick={addContentBlock}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            <Plus size={20} /> Add Content Block
          </button>
          
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
          >
            Save Sub Article
          </button>
        </div>
      </div>
    </div>
  );
}
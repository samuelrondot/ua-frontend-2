// React
import { FC, useEffect, useState } from "react";
// Models
import { TagModel } from "modules/cms/content/models";

type OwnProps = {
    activeTag: string;
    tags: Partial<TagModel>[];
    onChange: (tag: string) => void;
}

export const CmsContentTagTabSelector: FC<OwnProps> = (props) => {
    const [activeTag, setActiveTag] = useState<string>();

    useEffect(() => {
        setActiveTag(props.activeTag);
    }, [props.activeTag]);

    useEffect(() => {
        props.onChange(activeTag!);
    }, [activeTag]);

    const _isActive = (tag: string) => {
        return activeTag === tag;
    }

    return (
        <>
            <div className="bf-scroll-nav-wrapper">
                <nav className="bf-scroll-nav">
                    {props.tags?.map((tag, index) =>
                    (
                        <a
                            key={index}
                            className={`${_isActive(tag.slug!) ? 'active' : null}`}
                            onClick={() => setActiveTag(tag.slug)}
                            style={{ cursor: 'pointer' }}
                        >
                            {tag.name}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    )
}
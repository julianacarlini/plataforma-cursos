'use client'
import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

interface Props {
    children: ReactElement<any>[];
    carousel?: boolean;
    cardWidth?: number;
    loop?: boolean;
    blur?: boolean;
    center?: boolean;
    showDots?: boolean;
    arrowPosition: "in" | "out";
    borderColor?: string;
    borderRadius?: string;
}

export default function Slider(props:Props) {
    const [width, setWidth] = useState<number>()
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'center',
        loop: props?.loop,
        startIndex: props?.center? 1 : 0
    })

    const [selectedIndex, setSelectedIndex] = useState<number>(props?.center? 1 : 0)
    const scrollTo = (index: number) => emblaApi?.scrollTo(index)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

   useEffect(() => {
    if (!emblaApi) {
        return
    }

    const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
        emblaApi.off('select', onSelect);
    };
    }, [emblaApi]);

    useEffect(() => {
        setWidth(window.innerWidth)
    },[])


  return (
    <div className="embla" ref={emblaRef}>
        <div className="embla__container">
            {props?.children?.map((c, index) =>
                <div 
                    key={index} 
                    style={{
                        minWidth: (width && width > 768) ? `${props.cardWidth ?? 300}px` : '100%',
                        filter: (props.blur && index === selectedIndex) ? 'none' : props.blur? 'blur(2px)' : 'none',
                        transform: (props.blur && index === selectedIndex) ? 'scale(1)' : props.blur? 'scale(0.8)' : 'scale(1)',
                    }} 
                    className={props?.carousel ? "embla__slide_carousel" : "embla__slide"}
                >
                    <div 
                        style={
                            {
                                border: (props?.borderColor && selectedIndex === index) ? `1px solid ${props.borderColor}` : 'none', 
                                borderRadius: props?.borderRadius, 
                                
                            }
                        }>
                        {c}
                    </div>
                </div>
            )}
        </div>
        {props.showDots &&
            <div className={"dots"}>
                {props.children.map((_, index) => (
                <button
                    key={index}
                    aria-label='slider'
                    className={`${"dot"} ${index === selectedIndex ? "dotActive" : ''}`}
                    onClick={() => scrollTo(index)}
                />
                ))}
            </div>
        }
        <div className={`${"embla__button"} ${props.arrowPosition === "in" ? "left" : "outLeft"}`} onClick={scrollPrev}>
            <KeyboardArrowLeft />
        </div>
        <div className={`${"embla__button"} ${props.arrowPosition === "in" ? "right" : "outRight"}`} onClick={scrollNext}>
            <KeyboardArrowRight />
        </div>
    </div>
  )
}
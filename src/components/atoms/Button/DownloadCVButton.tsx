import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import danmcodeCv from '../../../assets/cv/cv_1144097956_dmuelas.pdf';

export const DownloadCVButton = () => {
    return (
        <a
            className="
                            inline-flex
                            items-center
                            gap-1
                            bg-[#1A202C]
                            text-white
                            font-mono
                            p-2
                            rounded-full
                            hover:bg-[#18AA80]
                            hover:font-bold
                            transition-colors
                            duration-300
                            border
                            text-sm
                            cursor-pointer
                            border-[#18AA80]"
            href={danmcodeCv}
            download="cv_daniel_muelas.pdf"
        >
            <ArrowDownTrayIcon className="w-4 h-4 text-white" />
            download_cv
        </a>
    )
}

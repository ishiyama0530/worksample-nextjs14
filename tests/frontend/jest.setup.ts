import "@testing-library/jest-dom";
import "dayjs/locale/ja";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("ja");
dayjs.extend(relativeTime);

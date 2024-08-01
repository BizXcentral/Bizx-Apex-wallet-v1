import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

import { useActiveColorScheme } from '@suite-native/theme';

export const SecuredCoinsSvg = (props: SvgProps) => {
    const colorScheme = useActiveColorScheme();
    const lineColor = colorScheme === 'dark' ? '#74DCB1' : '#0F6148';
    const fillColor = colorScheme === 'dark' ? '#092519' : '#F0F9F6';

    return (
        <Svg viewBox="0 0 180 156" {...props}>
            <Path
                d="M2.504 100.49c-.125-.125 3.293 3.918 10.635 4.931 7.342 1.012 31.401 4.676 31.401 4.676s9.621 2.655 13.17-3.159l.463-.213s6.814 11.842 22.577 16.837 33.425-2.276 34.31-2.655c0 0 4.303 11.822 16.333 19.343 12.029 7.521 23.804 12.96 23.804 12.96s2.21 1.055 3.608 1.263c1.398.209 2.024.065 3.544-.504 1.519-.569 3.103-1.328 3.103-1.328s1.075-.569 3.354-5.184c2.279-4.616 8.8-19.723 9.75-26.74.95-7.017 1.14-16.309-1.584-23.83-2.723-7.521-7.216-20.227-7.216-20.227l-3.863-9.103s-8.421-2.34-13.484-2.844c-5.064-.505-15.32-.065-15.32-.065l-.443-1.832s4.873-2.465 8.86-7.396c3.989-4.93 5.824-10.24 5.824-10.24s3.734-9.168.38-20.418-12.406-20.23-24.625-23.33c-12.22-3.098-26.273 1.832-34.06 13.654 0 0-6.582 7.586-5.507 22.821 0 0-11.14 1.771-21.08 11.758 0 0-.95-1.327-2.595-1.96s-3.103-1.833-3.103-1.833L48.52 44.23l-21.84-2.15-11.584-.823s-4.813-.823-6.522 5.753l-1.14 6.638-4.493 25.097-1.645 10.05s-1.454 6.259-.38 8.345c1.075 2.086 1.71 3.159 1.71 3.159"
                fill={fillColor}
            />
            <Path
                d="M26.815 42.706s2.404-25.287 10.635-30.468c8.231-5.181 17.727.254 17.218 8.598l-1.14 13.021-1.773 10.745 8.99 1.263s3.164-18.964 3.164-25.033S63.317 2.71 47.03 1.11c0 0-13.758-1.77-21.692 13.571 0 0-5.234 11.97-6.837 26.804l8.315 1.222z"
                fill={fillColor}
            />
            <Path
                d="M53.358 110.35s5.572-.675 7.091-11.295 6.416-41.638 6.416-41.638 1.181-7.753-2.196-9.27-3.923-2.275-3.923-2.275l-12.956-1.6-24.226-2.193-8.862-.842s-5.993.083-6.332 8.427L3.307 77.226.69 92.736s-1.603 4.634 2.446 7.752c0 0 3.206 3.54 7.513 4.384 4.308.846 35.537 5.564 35.537 5.564l7.176-.083-.004-.004zM133.38 65l-6.754 2.697s-15.531 10.453-21.608 21.915c0 0-1.352 0 .167 4.213s13.169 32.872 13.169 32.872 12.534 19.806 40.452 27.771c0 0 1.751.675 6.647-1.832 0 0 7.091-10.263 11.14-23.242s3.312-24.748-.843-36.244c-4.391-12.137-9.853-25.602-9.853-25.602S151.274 63.145 133.38 65z"
                fill={fillColor}
            />
            <Path
                d="M12.614 102.08c-2.826-.728-5.884-.929-8.634-1.923C.376 98.86.714 94.976 1.287 91.858c.977-5.283 1.729-10.578 2.526-15.888 1.33-8.867 3.734-17.648 4.642-26.569.019-.19-.274-.216-.323-.041-1.569 5.423-2.287 11.158-3.384 16.696a264.027 264.027 0 00-2.412 14.106c-.41 2.893-.82 5.787-1.356 8.659-.464 2.492-1.235 5.1-.897 7.657.768 5.792 8.182 5.162 12.527 5.617.008 0 .012-.01 0-.015h.004zM8.905 46.855c.326-1.506.79-3.197 2.058-4.195 1.451-1.145 3.552-1.138 5.31-.97.623.06 1.242.136 1.865.2 2.803.285 5.614.539 8.417.808 7.908.762 15.828 1.43 23.74 2.17 2.442.227 5.176.868 7.626.652a.314.314 0 00.084-.615c-2.017-.735-4.634-.603-6.753-.804-4.076-.387-8.152-.758-12.227-1.126-7.141-.649-14.285-1.263-21.43-1.851-1.573-.129-3.183-.338-4.726.125-2.613.781-3.627 3.08-4.079 5.576-.011.072.095.102.11.03h.004z"
                fill={lineColor}
            />
            <Path
                d="M56.609 45.054c4.167 1.677 2.53 7.38 2.051 10.828a943.23 943.23 0 01-1.325 9.133c-.567 3.782-1.163 7.555-1.695 11.341-.493 3.505-.76 7.028-1.257 10.53-.36 2.548-.854 5.097-.847 7.676 0 .117.179.148.21.026.645-2.469.895-5.01 1.252-7.536.536-3.778 1.322-7.517 1.877-11.295a1231.199 1231.199 0 002.913-21.107c.433-3.326 1.504-9.118-3.107-9.873a.142.142 0 00-.076.273l.004.004zM53.121 97.182c-1.227 4.331-2.978 9.167-8.2 8.993-3.35-.114-6.708-.603-10.025-1.055-6.719-.914-13.389-2.173-20.12-2.977-.258-.03-.304.383-.06.447 5.492 1.411 11.235 2.147 16.846 2.936 3.232.455 6.468.937 9.69 1.468 1.644.27 3.558.71 5.233.557 5.398-.496 6.271-6.01 6.735-10.35.007-.057-.084-.064-.1-.011v-.008z"
                fill={lineColor}
            />
            <Path
                d="M56.362 44.724c.912.55 2.063.717 3.027 1.199 1.626.811 3.157 1.813 4.778 2.636.506.254.943-.474.445-.763-2.123-1.24-5.557-3.61-8.25-3.099-.011 0-.011.02 0 .027z"
                fill={lineColor}
            />
            <Path
                d="M64.365 48.266c3.221.944 2.12 7.787 1.751 10.29-.167 1.15-.406 2.287-.596 3.433a605.059 605.059 0 00-1.428 9.038c-1.159 7.57-2.28 15.145-3.423 22.715-.35 2.313-.695 4.62-.95 6.945-.041.368.56.44.643.087 1.47-5.978 1.994-12.278 2.894-18.361 1.063-7.172 2.047-14.367 3.293-21.51.414-2.366.725-4.717.725-7.13 0-2.226-.106-5.29-2.86-5.681-.114-.015-.167.144-.049.178v-.004z"
                fill={lineColor}
            />
            <Path
                d="M59.974 100.66c-.66 2.583-1.614 5.518-3.487 7.498-1.74 1.84-4.383 2.12-6.795 2.098-3.377-.031-6.898-.937-10.225-1.464-7.764-1.233-15.546-2.356-23.3-3.66-1.469-.247-2.935-.509-4.409-.717-.528-.076-1.781.015-1.914-.008-.33-.057-.475.452-.14.508.425.073 1.184.475 1.758.577 1.413.25 2.84.425 4.261.626 4.125.576 8.243 1.225 12.364 1.851 4.22.641 8.44 1.289 12.66 1.934 3.704.565 7.54 1.517 11.292 1.047 5.535-.69 7.502-5.189 8.076-10.267.007-.08-.122-.095-.14-.019v-.004zM8.819 47.018c.543-1.6.888-2.947 2.237-4.1 1.587-1.358 3.57-1.4 5.557-1.312.311.015.311-.467 0-.486-2.162-.125-4.216-.042-5.93 1.426-1.2 1.032-2.29 2.849-1.99 4.472.012.068.106.053.125 0zM27.29 42.304c2.739-10.518 2.188-32.467 18.137-31.363 2.951.205 5.8 1.48 7.456 4.009 1.907 2.92 1.367 6.421 1.014 9.698-.368 3.402-.706 6.82-1.192 10.21-.456 3.175-.657 6.403-1.265 9.55-.061.312.425.433.467.13.406-2.959 1.177-5.845 1.626-8.796.448-2.95.983-5.86 1.352-8.807.596-4.767 1.242-10.267-2.564-13.935-3.259-3.14-8.748-3.626-12.823-1.968-5.147 2.09-7.726 6.789-9.124 11.898a166.255 166.255 0 00-2.362 9.865c-.623 2.988-1.561 6.349-1.356 9.425.023.345.535.451.63.083h.004z"
                fill={lineColor}
            />
            <Path
                d="M18.795 41.675c1.128-3.645 1.527-7.57 2.336-11.299.809-3.728 1.66-7.233 2.78-10.756 2.12-6.668 6.1-12.577 12.477-15.82C41.991.952 49.363.716 55.022 3.576c5.307 2.682 8 7.942 8.228 13.753.17 4.34-.441 8.807-.874 13.12-.494 4.945-.85 9.97-1.649 14.878-.056.345.434.414.475.065.581-4.749 1.49-9.44 2.055-14.193.532-4.468 1.371-9 1.238-13.514-.163-5.538-2.795-10.847-7.513-13.904C51.931.508 44.843-.016 39.176 1.774c-6.282 1.984-11.46 6.873-14.282 12.763-1.986 4.153-3.08 8.739-4.136 13.2-1.056 4.46-2.298 9.239-2.598 13.858-.023.372.524.421.63.084l.004-.004z"
                fill={lineColor}
            />
            <Path
                d="M50.105 3.83c3.548.546 6.791 2.681 8.786 5.655 2.206 3.292 2.499 6.982 2.389 10.82-.008.228.36.285.406.054 1.535-7.624-3.726-15.725-11.58-16.544-.008 0-.012.015 0 .015zM27.464 70.837c-.9-1.221-2.1-2.147-2.777-3.546-.676-1.4-.885-2.879-.74-4.35.345-3.517 3.088-7.123 6.909-7.002 3.855.125 6.696 2.882 6.928 6.725s-2.408 6.542-5.185 8.67a.482.482 0 00.59.758c3.338-2.59 6.11-5.97 5.34-10.433-.665-3.85-3.799-6.33-7.673-6.422-3.874-.09-6.761 3.054-7.532 6.566-.718 3.262.452 8.04 3.996 9.224.098.034.212-.099.144-.19z"
                fill={lineColor}
            />
            <Path
                d="M27.062 71.016c-1.573 2.534-2.446 5.739-3.49 8.523-1.151 3.075-2.306 6.148-3.427 9.235-.087.239.133.425.342.451 4.06.486 8.117.994 12.174 1.533.175.022.323-.167.323-.323.015-6.262-.194-12.528-.277-18.786-.008-.459-.7-.459-.714 0-.091 3.46.057 6.922.182 10.377.06 1.665.114 3.334.14 5 .012.674.35 2.62-.311 3-.448.253-2.549-.327-3.027-.388-2.249-.284-4.501-.557-6.746-.876-1.443-.205-1.124-.565-.65-1.854.376-1.028.76-2.056 1.144-3.08a255.421 255.421 0 012.4-6.122c.847-2.09 1.975-4.267 2.47-6.467.071-.318-.358-.512-.536-.223h.003z"
                fill={lineColor}
            />
            <Path
                d="M30.68 71.103c-.581-1.172-1.838-1.923-2.534-3.08-.767-1.274-1.131-2.814-1.067-4.297.14-3.357 2.374-6.383 5.637-7.286.6-.167.342-1.108-.258-.933-3.411.997-5.63 3.956-6.02 7.441-.183 1.631-.008 3.274.66 4.783.612 1.377 1.846 3.323 3.438 3.565.11.016.197-.083.144-.19v-.003z"
                fill={lineColor}
            />
            <Path
                d="M30.28 71.281c-1.576 2.526-2.37 5.765-3.426 8.541-1.166 3.069-2.431 6.11-3.49 9.22-.149.44.524.611.687.19 1.136-2.95 2.13-5.954 3.282-8.898 1.15-2.943 2.81-5.806 3.483-8.822.072-.318-.354-.512-.536-.223v-.008z"
                fill={lineColor}
            />
            <Path
                d="M27.111 71.008c.334.474 1.044.467 1.58.546.536.08 1.14.353 1.649.137.068-.03.068-.133.022-.179-.372-.383-1.128-.394-1.63-.553s-1.082-.44-1.556-.198c-.08.042-.118.167-.065.243v.004zM35.453 74.884c.053 3.163.414 6.315.509 9.482s-.33 6.399 0 9.505c.015.148.24.205.281.038.737-3.016.49-6.46.418-9.543s-.22-6.402-.938-9.516c-.034-.148-.27-.118-.266.034h-.004zM20.346 92.32c1.986.967 4.418 1.198 6.575 1.593s4.554 1.077 6.772.952c.346-.019.414-.49.08-.6-2.2-.731-4.71-.773-6.993-1.171-2.077-.36-4.254-1.05-6.37-1.013-.121 0-.182.182-.064.239zM21.531 77.725c.824-1.4 2.222-4.074 1.667-5.742-.345-1.04-1.325-2.018-1.819-3.02-.615-1.251-.752-2.711-1.45-3.898-.145-.243-.563-.213-.624.08-.402 1.873.798 4.19 1.823 5.711.247.368.593.694.825 1.066.505.812.38.952.209 1.779-.266 1.293-1.018 2.442-1.25 3.759-.065.364.418.614.623.261l-.004.004zM36.377 53.102c.433.197.862.504 1.288.728.482.254.926.573 1.333.94.847.767 1.33 1.677 1.736 2.728.25.652 1.204.41 1.056-.292-.259-1.237-1.045-2.412-1.968-3.258a6.644 6.644 0 00-1.47-1.017c-.66-.333-1.101-.349-1.82-.387-.284-.015-.42.433-.151.558h-.004zM.53 97.512c1.899 3.93 5.5 6.812 9.727 7.84 1.637.398 3.342.591 5.01.834 2.7.398 5.67 1.142 8.39 1.024.243-.01.403-.39.137-.504-3.829-1.62-8.47-1.662-12.55-2.352-1.8-.303-3.46-.406-5.002-1.487-2.257-1.585-3.783-3.39-5.53-5.495-.088-.107-.232.03-.18.136l-.003.004zM174 88.827c1.276 4.532 2.841 9.053 3.851 13.654 1.132 5.158 1.022 10.673.323 15.884-.74 5.526-2.355 10.859-4.364 16.048-2.009 5.188-4.801 10.153-6.548 15.417-.122.368.41.558.604.254 3.072-4.756 5.325-10.377 7.361-15.649s3.601-10.714 4.315-16.332c.645-5.109.676-10.418-.399-15.478-1.075-5.06-2.902-9.38-5.014-13.852-.034-.072-.148-.023-.125.053H174zM166.4 68.933c-.061 3.087 1.815 6.482 2.909 9.334.953 2.473 1.713 5.58 3.35 7.688.175.224.585.038.566-.235-.197-2.81-1.865-5.818-2.875-8.428-1.011-2.61-1.85-6.209-3.837-8.405-.041-.045-.117-.007-.117.05l.004-.004z"
                fill={lineColor}
            />
            <Path
                d="M170.31 144.17c-1.015 1.119-1.444 2.761-2.257 4.036-.923 1.449-1.435 3.133-2.772 4.27-.278.236.034.584.315.543 1.458-.209 2.157-2.367 2.644-3.562.387-.944.657-1.915 1.078-2.856.353-.789.828-1.574.999-2.427 0-.004-.004-.011-.011-.004h.004zM171.58 82.674c-1.626-4.798-2.834-9.88-4.885-14.519-.672-1.517-1.485-1.654-3.103-1.942-2.26-.398-4.517-.808-6.78-1.187-7.844-1.312-15.418-1.411-23.303-.334-.733.099-.422 1.21.308 1.112 7.346-1.006 14.513-.983 21.848.09 1.868.274 3.73.58 5.591.903.98.167 2.26.167 3.164.546 1.265.531 1.515 1.563 1.963 2.788 1.55 4.248 3.495 8.356 5.185 12.547 0 .008.015.004.012 0v-.004z"
                fill={lineColor}
            />
            <Path
                d="M153.52 147.64c1.425 1.597 3.624 2.249 5.565 3.068 1.941.82 4.364 2.371 6.43 2.329.297-.007.426-.352.236-.565-1.292-1.434-4.034-2.09-5.777-2.818-2.044-.853-4.171-2.071-6.404-2.131-.065 0-.088.075-.05.117zM110.52 89.718c1.922 6.69 4.208 13.222 6.582 19.768 1.622 4.468 3.27 8.974 5.477 13.195 2.473 4.726 6.062 8.906 9.99 12.482 4.668 4.252 10.335 8.223 16.26 10.476.369.14.551-.406.255-.603-2.837-1.904-5.895-3.455-8.713-5.405-2.576-1.779-5.037-3.705-7.327-5.837-3.867-3.603-7.304-7.749-9.678-12.482-5.102-10.169-7.958-21.323-12.717-31.644-.034-.072-.148-.019-.126.053l-.003-.004z"
                fill={lineColor}
            />
            <Path
                d="M157.3 149.31c.657.493 1.451.751 2.199 1.081.999.436 1.861 1.035 2.837 1.506 1.25.603 2.636 1.574 3.989.849.285-.151.155-.618-.164-.607-1.77.057-3.536-1.046-5.226-1.555-1.223-.368-2.355-1.119-3.631-1.285-.008 0-.008.007 0 .011h-.004zM115.93 80.554c5.31-5.462 10.954-10.408 17.37-14.564.619-.402.041-1.4-.582-.994-3.433 2.234-6.723 4.616-9.738 7.389-2.724 2.503-4.874 5.204-7.054 8.162-.004.004.004.011.008.007h-.004zM116.39 105.67c-.873-3.049-1.717-6.03-2.754-9.034-.531-1.544-1.037-3.095-1.591-4.632-.471-1.304-1.808-3.58-.847-4.832.452-.587-.551-1.164-.995-.58-.957 1.248-.551 2.223-.042 3.596.649 1.752 1.291 3.504 1.956 5.249 1.329 3.497 2.689 6.854 4.262 10.24 0 .008.011 0 .011-.003v-.004z"
                fill={lineColor}
            />
            <Path
                d="M104.56 91.933c3.168 10.479 6.457 21.221 11.16 31.146 4.459 9.422 12.542 16.757 21.414 22.01 6.112 3.619 12.831 6.933 19.588 9.152.357.118.582-.425.255-.603-5.454-3.015-11.311-5.272-16.77-8.314-5.458-3.041-10.221-6.372-14.494-10.638-3.346-3.342-6.29-7.101-8.398-11.345s-3.677-8.477-5.276-12.801c-2.325-6.292-4.626-12.531-7.354-18.664-.03-.072-.148-.019-.125.053v.004z"
                fill={lineColor}
            />
            <Path
                d="M150.98 151.36c.597.47 1.322.717 2.006 1.031 1.056.482 1.998 1.127 3.042 1.62 1.28.603 2.963 1.673 4.338.948.289-.151.152-.614-.163-.607-3.236.076-6.074-2.636-9.219-3-.004 0-.007.008-.004.012v-.004zM110.02 106.88c-1.458-4.256-2.571-8.636-4.087-12.869-.33-.922-.911-1.92-1.082-2.879-.296-1.669 1.098-2.75 2.066-3.925a242.062 242.062 0 013.821-4.548 77.01 77.01 0 0116.599-14.458c.619-.402.042-1.4-.581-.994-6.852 4.45-12.595 9.645-17.788 15.937-1.462 1.775-2.928 3.55-4.364 5.348-1.185 1.487-.893 2.283-.262 4.02 1.751 4.844 3.749 9.59 5.671 14.369 0 .007.015.004.011 0h-.004zM167.54 136.34c-1.151.497-1.554 2.109-2.024 3.178-.528 1.199-1.269 2.435-1.281 3.767 0 .296.361.424.566.235 1.06-.971 1.516-2.53 2.078-3.823.437-1.005 1.185-2.227.764-3.315-.019-.046-.057-.061-.103-.042zM162.4 74.884c2.207 8.47 5.979 16.419 8.588 24.775 1.034 3.315 1.687 6.603 1.827 10.081.107 2.591-.022 5.174-.296 7.749-.273 2.575-.942 5.037-1.219 7.578-.034.319.486.459.615.167 1.972-4.415 2.374-10.005 2.256-14.788a39.323 39.323 0 00-1.705-10.502 164.99 164.99 0 00-9.936-25.116c-.035-.072-.149-.023-.126.053l-.004.004z"
                fill={lineColor}
            />
            <Path
                d="M166.15 139.94c-.323.345-.486.69-.699 1.115-.338.667-.726 1.191-1.124 1.82-.27.429-.456.907-.692 1.354-.235.448-.592.774-.934 1.146a.329.329 0 00.232.554c.964.026 1.359-1.059 1.701-1.802.274-.596.388-1.134.585-1.749.27-.838.817-1.555.938-2.435 0-.003-.003-.011-.011-.003h.004zM166.81 86.547c-1.284-3.888-2.347-7.862-3.828-11.682-.418-1.077-.593-1.76-1.714-2.166-1.823-.66-4.026-.838-5.932-1.217-6.556-1.301-12.854-1.612-19.501-.793-.729.091-.737 1.244 0 1.153 5.994-.743 11.786-.633 17.742.372 1.455.246 2.906.516 4.353.796.839.163 2.058.186 2.822.558 1.257.61 1.348 1.771 1.781 2.92 1.288 3.406 2.879 6.698 4.27 10.062 0 .008.015.004.011 0l-.004-.003zM121.98 104.08c2.332 8.951 5.583 17.515 12.006 24.365 3.453 3.679 7.471 6.747 11.783 9.357 4.584 2.776 9.708 5.643 14.847 7.233.369.113.562-.406.255-.603-4.452-2.898-9.557-4.859-14.13-7.597-4.33-2.595-8.356-5.637-11.817-9.323-2.909-3.099-5.351-6.539-7.14-10.392-2.006-4.317-3.662-8.777-5.679-13.09-.034-.072-.144-.018-.125.054v-.004zM117.44 91.558c-.285 1.673.604 3.376 1.17 4.93.615 1.7 1.086 3.62 2.188 5.071.182.24.63.194.615-.167-.072-1.816-.908-3.564-1.523-5.256-.573-1.574-1.003-3.508-2.332-4.608-.034-.03-.106-.027-.118.03z"
                fill={lineColor}
            />
            <Path
                d="M157.31 143.23c.513.429 1.098.614 1.686.925.722.38 1.341.85 2.09 1.191.782.361 1.751.93 2.533.342.258-.194.175-.581-.163-.607-1.102-.08-1.911-.577-2.936-.869-1.026-.292-2.139-.849-3.202-.99-.004 0-.012.004-.004.012l-.004-.004zM117.3 91.023c-.535-1.92 3.237-4.851 4.338-6.25 1.291-1.643 2.636-3.251 4.087-4.757 2.963-3.076 6.32-5.689 9.868-8.052.615-.41.038-1.407-.581-.994-3.981 2.66-7.631 5.591-10.799 9.19-1.462 1.662-3.016 3.372-4.265 5.2-1.022 1.498-3.434 3.706-2.659 5.663 0 .008.011.004.011 0z"
                fill={lineColor}
            />
            <Path
                d="M143 92.009c.505 2.439 1.831 4.627 2.773 6.907s1.888 4.703 2.72 7.084c1.637 4.681 3.133 9.4 4.854 14.057 1.664 4.51 3.54 8.924 5.177 13.441.786 2.17 1.626 4.324 2.4 6.498.669 1.87 1.197 3.845 2.052 5.64.136.284.569.08.497-.209-.516-2.105-1.474-4.119-2.18-6.167a565.108 565.108 0 00-2.294-6.562c-1.63-4.52-3.024-9.106-4.695-13.616-1.736-4.68-3.741-9.228-5.572-13.863-.927-2.34-1.861-4.703-2.663-7.088-.721-2.147-1.234-4.434-2.419-6.395-.213-.349-.726-.114-.646.273H143zM135.06 71.212c-.307.36-.099.72.076 1.096.296.645.665 1.058.767 1.794.076.55.073.979.228 1.529.335 1.164.882 2.131 1.349 3.239.254.599.368 1.373.786 1.87.152.182.475.034.463-.194-.038-.86-.623-1.737-.805-2.583-.262-1.244-.448-2.39-1.037-3.55-.292-.58-.733-1.085-.87-1.74-.076-.365.069-.691-.117-1.048-.129-.239-.509-.8-.844-.413h.004zM166.19 152.36c-1.333.045-2.689.777-3.92 1.251-.931.357-2.26.425-3.016 1.043-.049.042-.042.126 0 .167.809.801 2.135-.022 2.986-.364 1.318-.535 2.958-.914 4.056-1.847.095-.08.019-.25-.102-.247l-.004-.003zM133.49 64.94c-1.189.076-2.514.827-3.623 1.267-.958.38-2.196.648-2.952 1.373-.121.114-.022.3.129.31 1.087.073 2.321-.66 3.309-1.042 1.063-.414 2.446-.766 3.301-1.525.14-.125.034-.394-.16-.383h-.004z"
                fill={lineColor}
            />
            <Path
                d="M130.77 66.195c-1.144.091-2.291.349-3.358.835s-1.899 1.395-2.739 2.222c-.019.02.004.042.027.034 1.037-.493 2.176-.758 3.172-1.335a72.765 72.765 0 002.898-1.745c.003 0 0-.011 0-.011z"
                fill={lineColor}
            />
            <Path
                d="M133.52 64.682c-.805.258-1.477.637-2.207 1.054-.649.372-1.595.634-2.081 1.191-.11.13-.027.289.129.311.653.084 1.345-.413 1.903-.705.79-.417 1.614-.83 2.454-1.138.44-.16.262-.857-.198-.71v-.003zM110.02 88.2c-1.04-.065-2.347.535-3.342.869-.851.284-1.994.45-2.67 1.046-.156.137-.016.346.151.365.92.113 2.131-.422 3.009-.717.93-.315 2.237-.774 2.871-1.518.015-.019.004-.045-.019-.045z"
                fill={lineColor}
            />
            <Path
                d="M113.75 83.403c-1.812 1.02-5.496 3.846-3.662 6.254.126.163.464.198.509-.064.091-.539.069-1.384.247-1.81.186-.45.543-1 .764-1.444.531-1.074 1.413-1.957 2.229-2.822.053-.057-.015-.148-.083-.11l-.004-.004zM77.187 41.75c-.368.099-.942.072-1.356.235-.581.231-1.101.687-1.645.986-1.025.57-2.062 1.024-3.038 1.7-1.953 1.357-3.343 3.041-5.025 4.684-.3.292.16.75.46.459 1.534-1.472 3.402-2.644 5.127-3.9.976-.709 1.884-1.57 2.887-2.241.524-.353 1.166-.558 1.675-.937.35-.262.619-.724.919-.982.004 0 0-.012-.004-.008v.004zM137.34 64.754c-.942-2.765-1.952-5.553-3.54-8.014-1.588-2.462-3.536-4.802-5.606-6.979-3.894-4.096-8.497-7.328-13.701-9.565-10.339-4.442-22.106-4.586-32.681-.831-.391.14-.224.77.175.626 10.195-3.622 21.578-2.818 31.537 1.263 5.003 2.048 9.67 4.957 13.633 8.64 2.282 2.124 4.227 4.657 5.883 7.29 1.56 2.476 3.11 4.885 4.292 7.574 0 .004.012 0 .012-.004h-.004zM58.176 106.65c2.2 3.815 4.638 6.956 8.117 9.698 3.194 2.518 6.693 4.68 10.457 6.231 7.54 3.111 16.732 4.533 24.776 2.796 4.733-1.021 9.314-2.158 13.724-4.199.379-.174.049-.736-.331-.561-9.572 4.43-20.651 5.128-30.907 2.89-10.255-2.238-19.732-8.075-25.828-16.859-.004-.004-.011 0-.008.004z"
                fill={lineColor}
            />
            <Path
                d="M123.26 53.827c-1.158-1.274-2.271-2.663-3.658-3.683-1.527-1.119-3.16-2.052-4.823-2.95-3.153-1.704-6.351-3.054-9.861-3.862-7.091-1.627-14.392-.819-21.21 1.593-.391.14-.224.766.175.626 13.226-4.684 28.882-.656 39.37 8.28.003.004.01 0 .007-.008v.004zM131.5 66.172c-.091-1.62-.699-3.027-1.443-4.483-.862-1.692-2.055-2.761-3.175-4.23-.251-.325-.813-.01-.563.33 1.03 1.381 1.695 3.073 2.61 4.56.824 1.343 1.519 2.67 2.56 3.83h.008l.003-.007zM60.706 98.294c1.493 4.008 3.327 7.407 6.332 10.494 2.757 2.833 5.929 5.299 9.454 7.093 6.875 3.497 15.607 5.279 23.257 3.789 4.562-.888 8.96-1.923 13.184-3.911.38-.178.049-.739-.33-.561-9.06 4.259-19.691 4.665-29.274 1.969-9.583-2.697-18.148-9.486-22.615-18.877 0-.004-.012 0-.012.004h.004zM76.206 49.662c-1.026.364-1.489.482-2.4 1.134-.912.652-1.862 1.199-2.735 1.896-1.972 1.57-3.164 3.425-4.73 5.348-.261.323.195.785.46.46 1.372-1.654 3.13-2.982 4.714-4.45s3.217-2.844 4.695-4.38c0 0 0-.012-.004-.008z"
                fill={lineColor}
            />
            <Path
                d="M104.48 91.144c-.186-.895.3-2.105.3-2.105l9.036-10.351c.042-.808-.015-1.582-.22-2.196-.243-1.206-.695-2.363-1.443-3.277-1.295-1.585-3.221-3.023-5.136-3.842-.11-.068-.174-.11-.174-.11l.106-.304c.247-.428.509-.997.539-1.07.293-.708.54-1.429.764-2.161.194-.637.346-1.37.554-2.079l.274-.777c.106-.262.232-.508.38-.736.068-.083.14-.186.197-.284.084-.11.167-.22.266-.315.122-.118.053-.3-.095-.353a38.067 38.067 0 00-4.379-1.32c-.08-.019-.194.012-.232.095a99.172 99.172 0 00-2.032 4.824c-.179.456-.501 1.943-.984 2.185l-.646-.083c-.315-.122-.649-.304-.854-.372-.403-.14-.805-.28-1.208-.417l1.39-3.607c.243-.63.486-1.26.737-1.885.236-.592.41-1.377.824-1.866.099-.118.057-.273-.087-.326a129.224 129.224 0 00-4.129-1.434c-.099-.072-.25-.08-.311.05-.851 1.839-1.474 3.792-2.283 5.654-.182.418-.38.835-.608 1.225-.042.069-.08.19-.144.24-.038.026-.053.045-.061.052 0-.007-.019-.018-.076-.018-.057 0-.43-.232-.528-.27l-.782-.315c-1.96-.788-3.947-1.532-5.884-2.381-.277-.122-.47.136-.41.34-.437.691-.71 1.54-1.007 2.292-.35.895-.668 1.801-.976 2.712-.06.174.095.314.255.33.972.102 2.172.246 3.08.777.456.349.927.816 1.14 1.347.227.823-.24 1.676-.566 2.446-.437 1.016-.844 2.048-1.258 3.076-.619 1.54-1.132 3.118-1.774 4.646-.676 1.612-1.405 3.205-2.077 4.817-.528 1.26-1.056 2.503-1.493 3.793v.007c-.25.49-.498.979-.801 1.43-.544.47-1.166.725-1.975.383a5.603 5.603 0 01-.403-.193c-.638-.508-1.447-1.297-1.994-.429-.502.8-1.09 1.67-1.546 2.564l-.027.042-.011.034a7.389 7.389 0 00-.51 1.263c-.014.046.008.118.058.14 1.212.513 2.298 1.218 3.46 1.829 1.09.572 2.173 1.153 3.225 1.794-.555.777-.805 1.911-1.128 2.776-.445 1.183-.836 2.393-1.276 3.58-.038.103.022.266.125.311 1.162.51 2.279 1.131 3.456 1.59.156.06.32-.069.369-.209a35.06 35.06 0 011.344-3.357c.35-.758.927-1.562 1.09-2.393.813.277 1.577.634 2.318 1.07-.449.955-.81 1.96-1.193 2.943-.448 1.145-.916 2.31-1.185 3.512a.19.19 0 00.133.231c1.192.43 2.362.907 3.479 1.506.152.08.346.011.395-.159.57-2.083 1.428-4.036 2.62-5.834 1.262.607 2.66 1.081 3.997 1.438 1.416.375 2.822.523 4.284.36a6.77 6.77 0 003.453-1.373c1.075-.815 2.218-1.71 3.046-2.78 0 0-2.609-7.813-2.795-8.708l.007-.015zM88.493 93.67c-.015-.262.274-.736.365-.986.152-.413.296-.827.437-1.24.27-.778.562-1.548.85-2.318.289-.77.578-1.543.863-2.313.174-.474.429-.983.573-1.495.057-.015.106-.034.175-.038.232-.178.452-.182.66-.011.175.05.35.155.517.228.904.402 1.816.804 2.686 1.278.36.197.714.402 1.06.618.258.174.512.353.763.539 1.823 1.354 3.661 3.512 3.058 5.958-.654 2.655-3.935 2.795-6.12 2.355-1.204-.242-2.362-.686-3.471-1.198-.581-.27-1.151-.561-1.72-.85-.267-.136-.601-.208-.7-.523v-.004h.004zm10.031-11.542c-1.04-.197-2.074-.47-3.016-.967-.642-.338-1.238-.706-1.937-.838.087-.338.179-.675.277-1.013.456-1.096.885-2.207 1.353-3.296.596-1.388 1.306-2.704 1.94-4.07 1.911.49 3.712 1.438 5.239 2.686.77.63 1.625 1.384 1.96 2.351.364 1.05-.031 2.253-.513 3.205-.422.823-1.033 1.586-1.926 1.916-1.022.379-2.325.22-3.373.022l-.004.004zM116.67 41.845a98.482 98.482 0 007.824-1.077c.107-.02.152-.106.152-.19a.21.21 0 00.038-.045c.528-.9.881-1.961 1.307-2.917l1.299-2.92 1.299-2.921c.41-.922.889-1.843 1.223-2.795.178.045.289-.224.106-.304-3.35-1.38-6.715-2.734-10.065-4.119-3.347-1.38-6.67-2.863-10.043-4.183-.095-.038-.175.026-.194.102a.141.141 0 00-.083.14c.22 3.566.501 7.127.835 10.68.262 2.78.498 5.58.828 8.356"
                fill={lineColor}
            />
            <Path
                d="M126.3 48.498c1.527.497 3.065.96 4.622 1.365.046.057.129.072.202.05.136.004.193-.16.14-.273a609.311 609.311 0 01-.194-14.31V32.95c0-.808.11-1.714-.053-2.503a.14.14 0 00-.08-.102c-.038-.114-.22-.156-.281-.016a716.954 716.954 0 00-2.59 6.114c-.41.979-.817 1.961-1.227 2.944-.376.902-.893 1.854-1.098 2.818-2.15.227-4.292.569-6.445.789M90.81 18.712c-.388.577-.908 1.077-1.242 1.676-.422.751-.615 1.665-.904 2.473-.6 1.68-1.22 3.292-1.557 5.056-.646 3.395-.354 6.649-.016 10.06.042.413.692.416.654 0-.32-3.327.193-6.737.718-10.033.239-1.51.463-3.09.892-4.555.217-.74.54-1.441.813-2.162.315-.827.384-1.673.653-2.515 0-.007-.007-.007-.011-.003v.004z"
                fill={lineColor}
            />
            <Path
                d="M152.52 39.842c1.079-6.069.859-11.868-1.337-17.667-1.967-5.196-5.078-10.032-9.222-13.753-8.645-7.76-21.833-10.859-32.779-6.3-6.651 2.769-12.531 6.967-16.626 12.95-.235.344.327.67.562.329 6.955-10.168 20.12-15.82 32.346-13.605 10.533 1.904 20.006 9.144 24.264 19.006 2.522 5.845 3.517 12.729 2.78 19.044 0 .008.008.008.011 0v-.004zM136.6 62.982c.923-.448 1.861-.747 2.7-1.335.84-.588 1.58-1.305 2.367-1.953 1.576-1.294 3.08-2.61 4.387-4.191 2.518-3.05 4.056-6.516 5.405-10.2.144-.394-.486-.565-.627-.174-1.375 3.736-3.81 7.032-6.305 10.115-1.117 1.38-2.313 2.83-3.631 4.024-.794.717-1.74 1.26-2.53 1.973-.623.557-1.124 1.194-1.774 1.733-.004.004 0 .011.008.008zM112.88 63.104s.007-.007 0-.007c-.008 0-.008.007 0 .007z"
                fill={lineColor}
            />
            <Path
                d="M124.21 5.48c-4.239-.763-8.155-.634-12.287.644-4.133 1.278-7.768 3.08-11.038 5.837-7.43 6.266-10.381 16.066-9.367 25.537.038.345.581.35.543 0-.983-9.178 2.504-18.38 9.386-24.578 6.108-5.503 14.574-8.196 22.76-7.43.003 0 .007-.007 0-.007l.003-.004zM135.01 58.708c3.995-2.526 7.266-5.496 9.735-9.554s3.942-8.458 4.242-13.176c.532-8.413-2.59-17.307-8.975-22.954-3.555-3.144-7.426-5.602-11.999-6.987-.334-.102-.478.421-.144.524 9.936 3.011 17.385 11.61 19.47 21.733 1.105 5.36.855 11.075-1.064 16.226-2.07 5.564-6.506 10.71-11.269 14.185-.004 0 0 .011.004.008v-.004z"
                fill={lineColor}
            />
            <Path
                d="M93.813 23.818c-1.2 1.984-1.922 4.21-2.294 6.535-.372 2.325-.103 4.646.087 7.059.027.345.57.348.543 0-.33-4.514.859-9.198 1.672-13.586 0-.004-.004-.008-.008 0v-.008zM68.294 34.608c-.406 1.567-.9 3.649-.327 5.219.11.296.543.33.638 0 .46-1.578.194-3.505.266-5.14.016-.333-.493-.397-.577-.079z"
                fill={lineColor}
            />
            <Path
                d="M66.183 37.525c.874.205 1.789.152 2.682.22.756.057 1.679.432 2.34-.038.106-.076.174-.228.09-.349-.455-.66-1.314-.6-2.058-.652-1-.072-2.097-.137-3.05.216-.27.099-.327.53 0 .607l-.004-.004zM30.998 2.104c-9.07 4.013-13.868 15.653-15.395 24.775-.038.235.285.333.36.098 1.57-4.923 2.93-9.876 5.562-14.375 2.465-4.214 5.716-7.38 9.602-10.282a.128.128 0 00-.13-.22v.004zM25.383.87c-5.5 3.323-9.458 9.415-9.838 15.88-.015.285.426.339.494.07 1.569-6.248 4.566-11.527 9.515-15.734.122-.102-.034-.3-.167-.216h-.004zM79.859 130.51c4.797 1.874 9.986 2.754 15.136 2.633 4.85-.114 10.096-.892 14.403-3.228.156-.084.05-.33-.118-.285-4.865 1.317-9.526 2.678-14.616 2.811s-9.948-.652-14.741-2.158c-.148-.046-.201.17-.06.227h-.005zM91.813 136.68c6.4 2.169 14.49 1.028 20.081-2.788.103-.072.016-.212-.098-.167-3.354 1.434-6.685 2.629-10.332 3.034-3.21.357-6.426.095-9.62-.322-.145-.019-.157.197-.035.243h.004zM160.74 51.467c-.402.876-.527 1.85-.638 2.803-.11.952-.258 1.908.118 2.788.072.17.357.155.433 0 .365-.736.346-1.57.429-2.382.103-1.01.331-2.03.289-3.042-.011-.307-.479-.493-.627-.17l-.004.003z"
                fill={lineColor}
            />
            <Path
                d="M158.95 54.088c1.345-.05 3.221.186 4.444-.459.232-.121.148-.44-.068-.516-1.273-.451-3.065.05-4.376.186-.494.053-.516.808 0 .789zM65.47 124.77c-.384.641-.342 1.491-.323 2.215.023.793.068 1.494.494 2.181.137.22.486.186.558-.072.198-.713.114-1.377.091-2.109s.1-1.475-.16-2.132c-.11-.28-.49-.371-.664-.087l.004.004z"
                fill={lineColor}
            />
            <Path
                d="M62.576 127.09c.858-.223 1.72-.387 2.598-.508.688-.095 1.497-.004 2.028-.497.13-.117.08-.315-.053-.402-.6-.398-1.39-.133-2.05.008-.916.197-1.805.512-2.671.861-.323.129-.209.629.148.534v.004zM104.89 120.96c.93-.728 1.781-1.547 2.628-2.367.088-.083 1.542-1.407 1.512-1.483-.118-.337-.448.672-.528.816-1.01 1.904-1.861 3.887-2.644 5.894-.068.178.187.3.308.178a162.553 162.553 0 005.838-6.049c.141-.152 1.064-1.294.809-1.161-.357.186-.752 1.547-.915 1.877-.608 1.252-1.219 2.504-1.827 3.755-.088.182.137.383.292.228.847-.861 1.675-1.752 2.549-2.583 1.136-1.077.634.307.592 1.248-.007.152.16.216.282.159 1.112-.512.03.027.151-.205-.075.141.118.243.209.122l.308-.406c.122-.159-.125-.296-.254-.197-.418.326-.221-1.726-.213-1.889.007-.163-.209-.243-.319-.133l-2.04 2.067c-.315.323-1.557 1.988-.627.524.931-1.464 1.641-3.376 2.439-5.007.087-.178-.144-.394-.293-.228a162.727 162.727 0 01-6.742 7.123c.118.118.175.027.179-.273-.091-.622.756-1.801 1.044-2.438a75.295 75.295 0 011.93-3.945c.076-.148-.106-.288-.228-.174-1.576 1.41-3.247 2.753-4.672 4.32-.14.155.069.352.228.227h.004zM129.81 62.299c1.097-.667 2.119-1.483 3.16-2.238l-.372-.284c-.673 1.703-1.379 3.39-2.078 5.086-.095.231.228.349.376.22 1.572-1.327 3.152-2.651 4.721-3.986l-.353-.205c-.536 1.278-1.136 2.53-1.709 3.793-.091.197.14.402.311.239a18.794 18.794 0 012.758-2.17l-.293-.224c-.095.698-.326 1.279-.687 1.89-.114.193.163.337.292.17.464-.607.676-1.195.779-1.953.023-.156-.129-.33-.293-.224a19.39 19.39 0 00-2.833 2.234l.311.239c.581-1.278 1.136-2.568 1.755-3.827.11-.22-.148-.41-.334-.258-1.584 1.316-3.16 2.644-4.74 3.967l.376.22c.695-1.672 1.378-3.349 2.1-5.01.087-.201-.114-.512-.346-.345-1.055.77-2.157 1.505-3.148 2.359-.175.148.049.432.243.315l.004-.008zM87.88 30.755c1.15-.595 2.233-1.18 3.48-1.578l-.312-.406c-1.208 1.783-2.454 3.54-3.685 5.303-.16.231.145.455.354.353 1.268-.607 2.514-1.184 3.722-1.916l-.266-.341c-1.299 1.642-2.605 3.277-3.904 4.919-.149.19.034.485.273.353l3.498-1.991-.304-.304c-.307.584-.619 1.164-.911 1.752-.118.236.224.437.353.205.327-.573.634-1.153.942-1.737.102-.193-.106-.417-.304-.303-1.166.663-2.332 1.323-3.498 1.987l.273.353c1.303-1.639 2.595-3.285 3.894-4.927.144-.182-.035-.482-.266-.341-1.178.713-2.393 1.376-3.7 1.82l.293.38c1.234-1.764 2.457-3.54 3.714-5.288.145-.2-.095-.466-.311-.406-1.31.383-2.545.888-3.624 1.734-.224.174.061.497.293.375l-.004.004z"
                fill={lineColor}
            />
            <Path
                d="M137.92 61.651c-.695-.444-1.356-.785-1.911-1.41l-.228.549c1.676.05 3.335-.034 4.98-.364.194-.038.236-.345.057-.432-1.417-.694-2.549-1.78-3.897-2.58l-.122.448c2.021.14 4.015.133 6.032-.015.057-.004.099-.095.034-.122-1.242-.527-2.351-1.536-3.312-2.465l-.182.311c.38.122.748.201 1.143.28.114.024.209-.15.088-.204a10.138 10.138 0 00-1.129-.436c-.17-.053-.326.19-.182.31.543.464 1.098.896 1.694 1.287.319.208.699.356 1.003.58.494.36.566.235-.156.288-1.629.114-3.399-.167-5.025-.296-.247-.019-.315.334-.122.448 1.353.8 2.481 1.881 3.901 2.571l.118-.44c-1.652.148-3.259.27-4.919.183-.304-.016-.395.352-.228.55.597.709 1.341 1.251 2.291 1.236.152 0 .201-.201.076-.28l-.004.003z"
                fill={lineColor}
            />
        </Svg>
    );
};

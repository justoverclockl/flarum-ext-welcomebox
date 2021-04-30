<?php

/*
 * This file is part of justoverclock/flarum-ext-welcomebox.
 *
 * Copyright (c) Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\Welcomebox;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
];
